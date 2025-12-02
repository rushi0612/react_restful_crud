import { useState } from 'react'
import { postData } from "../api/PostApi";
const Form = ({data, setData}) => {
    const [addData, setAddData]= useState({
        title: "",
        body: ""
    });

    const handelInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        });
    }
    const addPostData = async() =>{
       const res = await postData(addData);

       if(res.status === 201){
        setData([...data, res.data]);
        setAddData({ title: "", body: ""});
       }
    }

    const handelFormSubmit = (e) =>{
        e.preventDefault();
        addPostData();
    }

  return (
    <form onSubmit={handelFormSubmit} >
        <div>
            <label htmlFor="title"></label>
            <input type="text" 
            id="title"
            name="title"
            autoComplete="off"
            placeholder="Add Title"
            value={addData.title}
            onChange={handelInputChange}
            />
        </div>
        <div>
            <label htmlFor="body"></label>
            <input type="text" 
            id="body"
            name="body"
            autoComplete="off"
            placeholder="Add Post"
            value={addData.body}
            onChange={handelInputChange}
            />
        </div>
        <button type="submit">Add</button>
    </form>
  )
}

export default Form
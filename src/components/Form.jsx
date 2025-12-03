import { useEffect, useState } from 'react'
import { postData, updateData } from "../api/PostApi";

const Form = ({data, setData, updateDataApi, setUpdateDataApi}) => {
    const [addData, setAddData]= useState({
        title: "",
        body: ""
    });

    let isEmpty = Object.keys (updateDataApi).length === 0;

    useEffect(()=>{
        updateDataApi && 
        setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || "",
        })
    },[updateDataApi]);

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
//updatePostData
const updatePostData= async ()=>{
    try{
        const res = await updateData(updateDataApi.id, addData);
        console.log(res);
    if(res.status ===200){
        setData((prev)=>{
            return prev.map((curElem)=> {
                return curElem.id === res.data.id ? res.data : curElem;
            });
        });

         setAddData({ title: "", body: ""});
         setUpdateDataApi({});
    }

    } catch({error}){
        console.log(error);
    }   
};

//form submition
    const handelFormSubmit = (e) => {
        e.preventDefault();

        const action = e.nativeEvent.submitter.value;

        if (action === "ADD") {
            addPostData();
        } else {
            updatePostData();
        }
    };

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
        <button type="submit" value={isEmpty ? "ADD" : "Edit"}>
            {isEmpty ? "ADD" : "Edit"}
        </button>
    </form>
  )
}

export default Form
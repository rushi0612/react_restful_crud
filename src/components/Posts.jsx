
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getPost, deletePost } from "../api/PostApi.jsx";
import "../App.css";
import Form from "./Form.jsx";

export const Posts = () => {

  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async() =>{
    const res = await getPost(); 
    console.log(res.data);
    setData(res.data);
  }
  useEffect(() => {
    getPostData();
  }, []);

  //function to delete post
  const handelDeletePost = async(id) => {
    try{
      const res = await deletePost(id);
      if(res.status === 200){
        const newUpdatedPost = data.filter((curPost)=>{
          return curPost.id !== id;
        })
        setData(newUpdatedPost);
      }
    } catch(err){
      console.log(); 
    }
  };

  const handelUpdatePost = (curElem) => setUpdateDataApi(curElem);

  return (
    <>
    <section className="section-form">
      <Form 
      data={data} setData={setData} 
      updateDataApi={updateDataApi} 
      setUpdateDataApi={setUpdateDataApi} />
    </section>
   <section className="section-post">
      <ul>
        {
          data.map((curElem)=>{
            const {id, title, body} = curElem;
            return(
              <li key={id}>
                  <p>Title: {title}</p>
                  <p>Body: {body}</p>
                  <button onClick={()=> handelUpdatePost(curElem)} >Edit</button>
                  <button onClick={()=> handelDeletePost(id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
   </section>
   </>
  )
}
export default Posts;
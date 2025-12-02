
import axios from 'axios';
import { useEffect, useState } from 'react';
import {getPost} from '../api/PostApi.jsx';
import "../App.css";

export const Posts = () => {

  const [data, setData] = useState([]);
  const getPostData = async() =>{
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  }
  useEffect(() => {
    getPostData();
  }, []);

  return (
   <section className="section-post">
      <ul>
        {
          data.map((curElem)=>{
            const {id, title, body} = curElem;
            return(
              <li key={id}>
                  <p>Title: {title}</p>
                  <p>Body: {body}</p>
                  <button>Edit</button>
                  <button>Delete</button>
              </li>
            )
          })
        }
      </ul>
   </section>
  )
}
export default Posts;
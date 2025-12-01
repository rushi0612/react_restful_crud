import axios from "axios";
import React, { useEffect } from 'react'
import {getPost} from './api/PostApi.jsx';

const App = () => {
  
  const getPostData = async() =>{
    const res = await getPost();
    console.log(res.data);
  }
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>App</div>
  )
}

export default App
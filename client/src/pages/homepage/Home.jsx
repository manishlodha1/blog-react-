import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  console.log("search-> ",search);

  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
  console.log("search-> ",search);

        const res = await axios.get("/posts"+search);
         console.log(res);
      setPosts(res.data);
      }
      catch(err){
        console.error("Error fetching posts: ",err);

        if(err.response){
          console.error("Status code: ",err.response.status);
          console.error("Response data: ", err.response.data);
        }
        else if(err.request){
          console.error("No response receved: ",err.request);
        }
        else{
          console.error("Error setting up the request: ", err.message);
        }
      }
      
    };
    fetchPosts();
  },[search]);
  return (
    <div>
      <>
        <Header />
        <div className="home">
          <Posts posts={posts}/>
          <Sidebar />
        </div>
      </>
    </div>
  )
}

export default Home
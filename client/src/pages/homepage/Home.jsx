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

  useEffect(()=>{
    const fetchPosts = async ()=>{
      try{
        const res = await axios.get("/posts"+search);
         console.log(res);
      setPosts(res.data);
      }
      catch(err){
        console.error("Error fetching posts: ",err);
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
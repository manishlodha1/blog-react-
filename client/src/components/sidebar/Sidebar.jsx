import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats,setCats] = useState([]);


    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>ABOUT ME</span>
            <img
                src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                alt=""
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sint, iste iusto eos eligendi quaerat maiores. Deserunt impedit quasi obcaecati.</p>
        </div>
        <div className="sidebarItem">
            <div className="sidebarTitle">CATEGORIES</div>
            <ul className="sidebarList">
              {cats.map(c=>(
                <Link to={`/?cat=${c.name}`} className='link'>
                    <li className="sidebarListItem">{c.name}</li>
                </Link>
              ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
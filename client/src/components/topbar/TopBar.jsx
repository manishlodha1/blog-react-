import React, { useContext } from 'react'
import "./topbar.css";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const TopBar = ({setMenuOpen,menuOpen}) => {
  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () =>{
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-square-x-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className='toplist'>
                <li className='topListItem'>
                  <Link className='link' to="/">HOME</Link>
                </li>
                <li className='topListItem'>
                   ABOUT
                </li>
                <li className='topListItem'>
                  CONTACT
                </li>
                <li className='topListItem'>
                  <Link className='link' to="/write">WRITE</Link>
                </li>
                {user && <li className='topListItem' onClick={handleLogout}>LOGOUT</li>}
            </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to='/settings'>
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt=""
            />
            </Link>
          ) : (
            <ul className='toplist'>
              <li className='topListItem'>
                <Link className='link' to="/login">LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link className='link' to="/register">REGISTER</Link>
              </li>

            </ul>
          )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

        <button className="topMenu" onClick={()=>setMenuOpen(!menuOpen)}>
          <i class="fa-solid fa-bars"></i>
        </button>

    </div>
  )
}

export default TopBar
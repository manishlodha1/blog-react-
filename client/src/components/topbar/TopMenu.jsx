import React from 'react'

const TopMenu = ({setMenuOpen}) => {
  return (
    <>
        <div>
            <a onClick={()=> setMenuOpen(false)} href="#home">Home</a>
            <a onClick={()=> setMenuOpen(false)} href="#work">Work</a>
            <a onClick={()=> setMenuOpen(false)} href="#timeline">Experience</a>
            <a onClick={()=> setMenuOpen(false)} href="#services">Skills</a>
            <a onClick={()=> setMenuOpen(false)} href="#contact">Contact</a>
        </div>
    </>
  )
}

export default TopMenu
import React, {useState, useEffect} from "react";
import './navbar.css';
import { FcMenu } from "react-icons/fc";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  
  return (
    <div className="container">
    <nav>
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Profile</li>
          <li className="items">About</li>
          <li className="items">Skills</li>
          <li className="items">Projects</li>
          <li className="items">Contact</li>
        </ul>
      )}

      <button 
      className="btn"
      onClick={toggleNav}>
        <FcMenu
        className="btn"/>
      </button>
    </nav>  
    </div>
  )
}

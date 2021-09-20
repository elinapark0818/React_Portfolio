import React, {useState, useEffect} from "react";
import './navbar.css';
import { FcMenu } from "react-icons/fc";
import { useRef } from 'react/cjs/react.development';

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

  const navRef = useRef([]);

  const [currentNav, setCurrentNav] = useState();

  {nativeTouchData.map((data, index) => (
    <Nav
    key={index}
    onClick={() => {
      navRef.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setCurrentNav(navRef.current[index]);
    }}
      seleted={navRef.current[index] === currentNav}
    >

    </Nav>
  ))}

  
  return (
    <div className="container">
    <nav>
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">
          <button 
          className="items"
          ref={(cp => (navRef.current[0] = cp))}><div><Home/></div>
          </button>
          
          <button 
          className="items"
          ref={(cp => (navRef.current[1] = cp))}><div><Profile/></div>
          </button>
          <button 
          className="items"
          ref={(cp => (navRef.current[2] = cp))}><div><About/></div>
          </button>
          <button 
          className="items"
          ref={(cp => (navRef.current[3] = cp))}><div><Skills/></div>
          </button>
          <button 
          className="items"
          ref={(cp => (navRef.current[4] = cp))}><div><Projects/></div>
          </button>
          <button 
          className="items"
          ref={(cp => (navRef.current[5] = cp))}><div><Contact/></div>
          </button>
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

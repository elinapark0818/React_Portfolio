import React from "react";
import { useState, useEffect } from 'react/cjs/react.development';
import './menu.css';

export default function Menu() {

  const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false);

    const handleFollow = () => {
      setScrollY(window.pageYOffset);
      if(ScrollY > 300) {
        setBtnStatus(true);
      } else {
        setBtnStatus(false);
      }
    }

    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow)
      }
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow)
      }
    })

  return (
    <div className="container">
      <div className="wrap">
        <ul className="ul">
          <li className={BtnStatus ? "menu active" : "menu"}>Home</li>
          <li className={BtnStatus ? "menu active" : "menu"}>Profile</li>
          <li className={BtnStatus ? "menu active" : "menu"}>About</li>
          <li className={BtnStatus ? "menu active" : "menu"}>Skills</li>
          <li className={BtnStatus ? "menu active" : "menu"}>Project</li>
          <li className={BtnStatus ? "menu active" : "menu"}>Contact</li>
        </ul>
      </div>
    </div>
  )
}
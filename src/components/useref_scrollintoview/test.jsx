import React, { useRef } from "react";

export default function Test() {
  return (
    <div className="App">
      <div style={{ height: "10000px" }} />
      <MyButton>button 1</MyButton>
      <MyButton>button 2</MyButton>
      <MyButton>button 3</MyButton>
      <div style={{ height: "10000px" }} />
    </div>
  );
}

const MyButton = props => {
  const buttonRef = useRef();

  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: buttonRef.current.offsetTop
    });
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleScroll}>
        {props.children}
      </button>
    </div>
  );
};

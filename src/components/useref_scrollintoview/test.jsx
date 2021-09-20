import React, { useRef } from 'react'
import { useState } from 'react/cjs/react.development';
import Skills from '../skills/skills';

export default function Test() {

  const tabRef = useRef([]);

  const [currentTab, setCurrentTab] = useState();
  
  {TABDATA.map((data, index) => (
    <Tab
    key={index}
    onclick={() => {
      tabRef.current[index].scrollIntoView({
        behavior: 'smooth', block: 'start',
      });
      setCurrentTab(tabRef.current[index]);
    }}
    selected={tabRef.current[index] === currentTab}
    >
      {data}
    </Tab>
  ))}

  return (
    <>

    <h1 ref={el => (tabRef.current[0] = el)}>첫 번째</h1>
    <button onClick={() => {tabRef.current.focus()}}/>
    
    <h1 ref={el => (tabRef.current[1] = el)}>두 번째</h1>
    <button onClick={() => {tabRef.current.focus()}}/>

    <h1 ref={el => (tabRef.current[2] = el)}>세 번째</h1>
    <button onClick={() => {tabRef.current.focus()}}/>
    </>
  )
}

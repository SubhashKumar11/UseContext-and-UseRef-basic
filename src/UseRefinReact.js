import React,{useState} from 'react'
import { useRef } from 'react'
const UseRefinReact = () => {
    const refElement = useRef(" ")
    const [name,setname] = useState('ram')
    console.log(refElement)
    function Reset(){
        setname(" ");
        refElement.current.focus()
    }
  return (
    <>
    <h1>Learning using useRef</h1>
    <input ref={refElement} type="text" value={name} onChange={
        (e)=>setname(e.target.value)
    } />
    <button onClick={Reset}>Reset</button>
    <button onClick={Reset}>HandleInput</button>
    </>
   
  )
}

export default UseRefinReact
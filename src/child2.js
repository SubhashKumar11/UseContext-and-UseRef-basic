import React,{useContext} from 'react'
import {data,data1} from './App'

const Child2 = () => {
    const name = useContext(data);
    const gen = useContext(data1)
  return (
    <div>i am child2.my name is{name} and gender is {gen}</div>
  )
}

export default Child2
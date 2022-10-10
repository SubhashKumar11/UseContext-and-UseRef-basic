import React , {useContext} from 'react'
import {data,data1} from './App'
const Child = () => {
    const name =  useContext(data)
    const gen =  useContext(data1)
  return (
    <div>Child name is {name}.And my gender is {gen}</div>
  )
}

export default Child
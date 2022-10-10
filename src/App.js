import React, { createContext } from 'react'
import Child from './Child'
import Child2 from './child2';
import UseRefinReact from './UseRefinReact';
const data = createContext();
const data1 = createContext();
const App = () => {

  const name = 'yash'
  const gender = 'female'
  return (
    <>
      <data.Provider value={name}>
      <data1.Provider value={gender}>
        <Child/>
        <Child2/>
        </data1.Provider>  
        </data.Provider>  
        <UseRefinReact/> 
    </>
  )
}
export {data,data1}
export default App
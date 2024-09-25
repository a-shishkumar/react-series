import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5
  let [counter,setcounter]=useState(15);
  

const addvalue=()=>{
  counter=counter+1
  console.log("value added : "+ counter)
  setcounter(counter)
}
const removevalue=()=>{
  counter=counter-1
  console.log("value removed : "+ counter)
  setcounter(counter)

}

  return (
    <>
      <h1>Chai or React !!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue} >Add value {counter} </button>
      <br />
      <button onClick={removevalue} >Remove value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App

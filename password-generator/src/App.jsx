import { useState,useCallback,useEffect,useRef } from 'react'

// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState("")


  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(number){
      str+="1234567890"

    }
    if(character){
      str+="!@#$%&*~?/|\[]{}"
    }
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setpassword(pass)


  },[length,number,character,setpassword])

  useEffect(()=>{passwordgenerator()},[length,number,character,setpassword])

  const passwordref=useRef(null)

  let copypassword=useCallback(()=>{
    passwordref.current?.select() 
    passwordref.current?.setSelectionRange(0,length ) 
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="text-center w-[100vw] mx-auto m-auto">
      <div className="w-screen max-w-full mx-auto shadow-md rounded-lg px-4 py-4 mg-6 text-orange-500 bg-gray-700">
        <h1  className='text-center text-white my-3' >Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6 text-1xl">
          {/* <strong> */}
          <input  type="text"
            value={password}
            className="outline-none w-screen py-1 px-3 bg-white text-black text-3xl" 
            placeholder='password'
            readOnly
            ref={passwordref}/>
            <button 
            onClick={copypassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mb-8 text-1xl' >copy</button>
          {/* </strong> */}
        </div>
        <div className="flex text-sm gap-x-2 text-2xl ">
          <div className="flex items-center gap-x-1 px-3">
            <input type="range" min={8} max={80}  value={length} className='cursor-pointer' 
            onChange={(e)=>{
              setlength(e.target.value) }} />
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1 px-3">
            <input type="checkbox" 
            defaultChecked={number}
            id='numberInput'
            onChange={()=>{
              setnumber((prev)=>!prev)
            }}
            />
            <label htmlFor="numberInput">  Number</label>
          </div>
          <div className="flex items-center gap-x-1 px-3">
            <input type="checkbox" 
            defaultChecked={character}
            id='characterInput'
            onChange={()=>{
              setnumber((prev)=>!prev)
            }}
            />
            <label htmlFor="characterInput">  Character</label>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App

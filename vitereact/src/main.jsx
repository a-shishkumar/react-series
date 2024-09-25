// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function Myapp(){
  return (
    <h1>Custon App !!</h1>
  )
}




// const reactElement={
//   type:'a',
//   props:{
//       href:'https://www.google.com',
//       target:'_blank',
//   },
//   children:"click me to visit google"
// }

const anotheruser=" Arjun"

const reactElement=React.createElement(
  'a',
  {
    href:"https://www.google.com",
    target:'_blank'

  },
  "click here to visit the google",
  anotheruser
)



const otherElement =(
  <a href="https://www.google.com" target='_blank'>visit the google to search</a>
)

createRoot(document.getElementById('root')).render(
<>
    <App/>
    <Myapp />
    {otherElement }
    <br />
    {reactElement}
    </>

)

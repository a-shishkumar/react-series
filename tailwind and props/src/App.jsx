
import './App.css'
import Cards from './components/cards'

function App() {
   let obj1={
    name:"arjun",
    age : 20
   }

   let obj2=[1,2,3,4]


  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 ' >Tailwind Test</h1>

     


<Cards username={"Ashish"} btn="Click me "/>
<Cards username={"Ayush"} btn="Visit me"/>
<Cards username={"Aryan"} btn="About me"/>
{/* <Cards object={obj1}/>
<Cards object={obj2} /> */}

    </>
  )
}

export default App

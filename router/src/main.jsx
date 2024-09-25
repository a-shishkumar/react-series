import { StrictMode } from 'react'
import Layout from './Layout'
import About from './components/about/About'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import { createRoot } from 'react-dom/client'
import Github ,{githubinfo}from './components/github/Github'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//     element:<Home/>,
//       },
//       {
//         path:'about',
//     element:<About/>,
//       },
//       {
//         path:'contact',
//     element:<Contact/>,
//       }

//     ]
//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='user/:userid' element={<User />} />
      <Route  path='' element={<Home/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='contact' element={<Contact/>}/>
      <Route  loader={githubinfo} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>


  </StrictMode>,
)

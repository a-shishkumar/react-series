// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

function Github() {
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/user/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // })

  return (
    <div className="text-center p-4 bg-gray-600 text-white  text-3xl w-screen h-[47vh]" >
      Github followers :  {data.followers}
      <img src={data.avatar_url} alt="github picture" width={300 } />
    </div>
  ) 
}

export default Github;

export const githubinfo = async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}


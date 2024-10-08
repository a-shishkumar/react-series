import {useEffect,useState} from 'react'



 function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
   useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}/
    .then((res)=>res.json())
    .then((res)=>setdata(res[currency]))
    console.log(data)
   },[currency])
   return data
 }

 export default useCurrencyInfo;
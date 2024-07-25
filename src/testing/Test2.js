import { useEffect, useState } from 'react'
function Test2() {
  console.log("2")
    const[state,change]=useState("one")
    useEffect(()=>{
      console.log("child render")
    },[])
   console.log("3")
   return state
}

export default Test2
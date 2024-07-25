import React, { useEffect } from 'react'
import Test2 from './Test2'
function Test() {
  console.log("1")
  useEffect(()=>{
    console.log("parent render")
  },[])
  const val=Test2();
  console.log("4")
  return (<>
  <div>{val}</div>
 
  </>
    
  )
}

export default Test
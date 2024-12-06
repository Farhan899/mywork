"use client"


import { useEffect, useState } from "react";

export default function Home() {
 
  const [count, setCount] = useState(1);

    useEffect(() => {
      async function abc() { 
        await fetch ("abc.com") 
      }
  
  abc()
  console.log("use effect");
    },[count])
  return(
    <div>
      {count}
      <br/>
      <button className="bg-red-500" onClick={()=> setCount{count + 1}}>
        increament
      </button>
    </div>
  )
}
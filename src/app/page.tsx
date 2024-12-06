"use client"
import { useEffect, useState } from "react";

export default function home() {
  const [count, setCount] = useState(1);
  
  return(
    <div>
      {count}
      <br/>
      <button className="bg-red-500" onClick={()=>{setCount(count + 1)}}>
        increament
      </button>
    </div>
  )
}
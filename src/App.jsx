import { useState } from "react"



function App() {

  const [color,SetColor]=useState("bg-blue-500")

  return (
    <div className={`w-full relative h-screen ${color}`}>
      <div className="flex flex-row gap-4 p-4 absolute bg-white items-center justify-center bottom-14  left-1/2 -translate-x-1/2 ">
          <button className="px-2 py-4" onClick={()=>{
            SetColor("bg-red-500")
          }}>Red</button>
            <button className="px-2 py-4 " onClick={()=>{
            SetColor("bg-green-500")
          }}>Green</button>
      </div>
 </div>
  )
}

export default App


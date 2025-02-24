import { useEffect, useState } from "react";

const BgChanger=()=>{
    const [color,setColor]=useState('bg-gray-500');

    useEffect(()=>{
        console.log(`useEffect Called: Background changed to ${color}`)
    },[])

    return(
        <div className={`w-full relative h-screen  ${color}`}>
            <div className="flex items-center justify-center absolute bottom-20 -translate-x-1/2 left-1/2">
                <button className="px-2 py-4 border text-white bg-black" onClick={()=>{
                    setColor("bg-blue-500")
                    console.log("usestate called")
                }}>
                    Click me
                </button>
                <button className="px-2 py-4 border text-white bg-black" onClick={()=>{
                    setColor("bg-purple-500")
                    console.log("usestate called")
                }}>
                    Purple
                </button>
              
            </div>
        </div>
    )
}

export default BgChanger;
import { useEffect, useState } from "react";

const HookUseEffect = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });
    const [screenWidth,setScreenWIdth]=useState(window.innerWidth);
    const handleAddition = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num + 1,
            };
        });
    };
    const handleSubtraction = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num - 1,
            };
        });
    };
    useEffect(()=>{
       window.addEventListener("resize",()=>{
        setScreenWIdth(window.innerWidth)
       })
       console.log("ran")

       return ()=>{
        console.group("ran returned")
       }
    },[count])

    return (
        <div>
        <div className="flex justify-center">
            <button
                className="px-2 py-2 border border-black-500 "
                onClick={handleAddition}
            >
                +
            </button>
            <h1>{count.num}</h1>
            <h1>{count.id}</h1>
            <button
                className="px-2 py-4 border border-black-500 "
                onClick={handleSubtraction}
            >
                -
            </button>
            
        </div>
        <h1>{screenWidth}</h1>
        </div>
        
    );
};
export default HookUseEffect;

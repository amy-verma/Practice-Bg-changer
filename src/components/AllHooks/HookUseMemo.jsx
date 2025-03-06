import { useState } from "react";

const HookUseMemo = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });

    const [show,setShow]=useState(false)
    const handleChange=()=>({
        for(let i=0;i<100000;i++){

            return count.num*2;
        }
    },[])

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
           { show && <h1>{count.id}</h1>}
            <button
                className="px-2 py-4 border border-black-500 "
                onClick={handleSubtraction}
            >
                -
            </button>
        </div>
        <p >{handleChange()}</p>
        <button onClick={()=>setShow(prev=>!prev)}></button>
        </div>
    );
};
export default HookUseMemo;

//use for memoization
//memoizatiin-when the same task is repeated again and again it caches the value of the perticular task

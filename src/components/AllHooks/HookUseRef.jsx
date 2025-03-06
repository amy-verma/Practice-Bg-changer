import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });
 const countRef=useRef()

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
            <h1 ref={countRef}>{count.num}</h1>
            <h1>{count.id}</h1>
            <button
                className="px-2 py-4 border border-black-500 "
                onClick={handleSubtraction}
            >
                -
            </button>
        </div>
        <button onClick={()=>{
            countRef.current.innerHTML="10";
        }}>Change to 10</button>
        </div>
    );
};
export default HookUseRef;

// /takes a reference to a perticular componenet
//used for operatio like where we need to access the underline attributes of an HTML Tags
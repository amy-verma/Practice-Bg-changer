import {  useState } from "react";

const HookUseState = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });
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
    );
};
export default HookUseState;

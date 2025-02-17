import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

const BgChanger = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, SetPassword] = useState("");

    const passwordRef=useRef(null)

    const passGenerater = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "1234567890";
        if (charAllowed) str += "!@#$%^&*()";

        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        SetPassword(pass)
    }, [length, numberAllowed, charAllowed, SetPassword]);

    const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0,5)
        window.navigator.clipboard.writeText(password)
    },[numberAllowed,length,charAllowed,SetPassword])

    useEffect(()=>{
        passGenerater()
    },[length,numberAllowed,charAllowed,passGenerater])

    return (
        <div>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-600 bg-gray-300">
                <h1 className="flex justify-center my-3">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
                        Copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <label>Length:{length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                             className="cursor-pointer"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="characterInput"
                             className="cursor-pointer"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="characterInput">Characters</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BgChanger;

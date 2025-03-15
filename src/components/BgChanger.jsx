import { useState } from "react";
import resList from "./mockData";
import RestaurantCard from "./RestaurantsCard";
import Shimmer from "./Shimmer";

const BgChanger = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    const [btnName,setBtnName]=useState("Login")

    const [filteredRestaurant,setFilteredRestaurant]=useState(resList)
        //whenever state variable updates, react triggers a reconciliation cycle(re-render the component)
    const [searchText,setSearchText]=useState("");

    let handlefilterbtn = () => {
        let filteredRestaurant = listOfRestaurant.filter(
            (res) => res?.info?.avgRating > 4
        );
        console.log(filteredRestaurant);
        setListOfRestaurant(filteredRestaurant);
        setFilteredRestaurant(filteredRestaurant)
    };

    //Conditional Redering-Rendering on the basics of condition
    if (listOfRestaurant.length === 0) {
        return <Shimmer />;
    }
    const handleFilter=()=>{
      btnName === "Login" ?   setBtnName("Logout") : setBtnName("Login")
       console.log(btnName)
    }

    const handleonchange=(e)=>{
       setSearchText(e.target.value)
       
    }

    return (
        <div>
            <div className="header-container">
            <div className="login-btn">
                <button className="login" onClick={handleFilter}>{btnName}</button>
            </div>
            <div className="search">
                <input type="text" className="search-box" placeholder="search your restaurant" value={searchText} onChange={handleonchange}></input>
                <button className="search-btn" onClick={()=>{
                    let filteredRestaurant=resList.filter((res)=>
                        res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestaurant(filteredRestaurant)
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={handlefilterbtn}>
                    Top RATED Restautrant
                </button>
            </div>
            </div>
            <div className="rest-cards">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};
export default BgChanger;
// import { useCallback } from "react"
// import { useState } from "react"

// const BgChanger=()=>{
//     const [length,setLength]=useState(8)
//     const [charAllowed,setCharAllowed]=useState(null)
//     const [numberAllowed,setNumberAllowed]=useState(null)
//     const [password,SetPassword]=useState(null)

//     const passGenerater=useCallback(()=>{
//          let pass="";
//         let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//         if (numberAllowed) str+="1234567890";

//         if (charAllowed) str+="!@#$%^&*()";
//         for(let i=0;i<length;i++){
//             let char=Math.floor(Math.random()*str.length+1)
//             pass +=str.charAt(char)
//         }
//         SetPassword(pass)

//     }
//         ,[length,charAllowed,numberAllowed,SetPassword])

//     return(
//         <div>

//         </div>
//     )
// }
// export default BgChanger

//  const BgChanger=()=>{
//     return(

//     )
//  }
//  export default BgChanger;
// import { useCallback, useEffect, useRef } from "react";
// import { useState } from "react";

// const BgChanger = () => {
//     const [length, setLength] = useState(8);
//     const [numberAllowed, setNumberAllowed] = useState(false);
//     const [charAllowed, setCharAllowed] = useState(false);
//     const [password, SetPassword] = useState("");

//     const passwordRef=useRef(null)

//     const passGenerater = useCallback(() => {
//         let pass = "";
//         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//         if (numberAllowed) str += "1234567890";
//         if (charAllowed) str += "!@#$%^&*()";

//         for (let i = 0; i <= length; i++) {
//             let char = Math.floor(Math.random() * str.length + 1);
//             pass += str.charAt(char);
//         }
//         SetPassword(pass)
//     }, [length, numberAllowed, charAllowed, SetPassword]);

//     const copyPasswordToClipboard=useCallback(()=>{
//         passwordRef.current?.select()
//         passwordRef.current?.setSelectionRange(0,5)
//         window.navigator.clipboard.writeText(password)
//     },[numberAllowed,length,charAllowed,SetPassword])

//     useEffect(()=>{
//         passGenerater()
//     },[length,numberAllowed,charAllowed,passGenerater])

//     return (
//         <div>
//             <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-600 bg-gray-300">
//                 <h1 className="flex justify-center my-3">Password Generator</h1>
//                 <div className="flex shadow rounded-lg overflow-hidden mb-4">
//                     <input
//                         type="text"
//                         value={password}
//                         className="outline-none w-full py-1 px-3"
//                         placeholder="Password"
//                         readOnly
//                         ref={passwordRef}
//                     />
//                     <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
//                         Copy
//                     </button>
//                 </div>
//                 <div className="flex text-sm gap-x-2">
//                     <div className="flex items-center gap-x-1">
//                         <input
//                             type="range"
//                             min={6}
//                             max={100}
//                             value={length}
//                             className="cursor-pointer"
//                             onChange={(e) => {
//                                 setLength(e.target.value);
//                             }}
//                         />
//                         <label>Length:{length}</label>
//                     </div>
//                     <div className="flex items-center gap-x-1">
//                         <input
//                             type="checkbox"
//                              className="cursor-pointer"
//                             defaultChecked={numberAllowed}
//                             id="numberInput"
//                             onChange={() => {
//                                 setNumberAllowed((prev) => !prev);
//                             }}
//                         />
//                         <label htmlFor="numberInput">Numbers</label>
//                     </div>
//                     <div className="flex items-center gap-x-1">
//                         <input
//                             type="checkbox"
//                             defaultChecked={charAllowed}
//                             id="characterInput"
//                              className="cursor-pointer"
//                             onChange={() => {
//                                 setCharAllowed((prev) => !prev);
//                             }}
//                         />
//                         <label htmlFor="characterInput">Characters</label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BgChanger;

// import {  useEffect, useState } from "react";

// const BgChanger=()=>{
//     const [color,setColor]=useState('bg-gray-500');
//     const [count,setCount]=useState(0)
//     const [btnName,setBtnName]=useState("Login")
//     console.log("Header Render")

//     useEffect(()=>{
//         console.log(`useEffect Called: Background changed to ${color}`)
//     },[color])

//     return(
//         <div className={`w-full relative h-screen  ${color}`}>
//             <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-2xl">
//                 Count :{count}
//                 {1+25}
//             </div>
//             <div className="flex items-center justify-center absolute bottom-20 -translate-x-1/2 left-1/2">
//                 <button className="px-2 py-4 border text-white bg-black" onClick={()=>{
//                     setColor("bg-blue-500")
//                     console.log("usestate called")
//                 }}>
//                     Click me
//                 </button>
//                 <button className="px-2 py-4 border text-white bg-black" onClick={()=>{
//                     setColor("bg-purple-500")
//                     console.log("usestate called")
//                 }}>
//                     Purple
//                 </button>
//                 <button className="px-2 py-4 border text-white bg-black" onClick={()=>{
//                     // setCount(prevCount=>prevCount+1)
//                     // setCount(prevCount=>prevCount+1)
//                     // setCount(prevCount=>prevCount+1)
//                     setCount(count+1)
//                     setCount(count+1)
//                     setCount(count+1)

//                     console.log("usestate called")
//                 }}>
//                     Count
//                 </button>
//                 <button className="px-2 py-4 border text-white bg-black" onClick={()=>{
//                    setBtnName(btnName === "Login" ? "Logout" : ("Login"))
//                 }}>{btnName}</button>

//             </div>
//         </div>
//     )
// }

// export default BgChanger;

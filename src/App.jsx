import React, { useState } from "react";
import Cont from "./Cont";



function App() {
    const[number,setNumbers]=useState([0,0,0]);
    const handleInputChange=(index,value)=>{
      setNumbers((prevNumbers) => {
        const newNumbers=[...prevNumbers];

      newNumbers[index]=Number(value);
      return newNumbers;
      });
    };
    const [res,setRes]=useState(0)
    function calc(){
      var sum= number[0]+number[2]+number[1];
      setRes(sum);
    }
    function reload(){
      setNumbers([0,0,0]);
    }
  return (
    <>
      <div className="w-full h-screen bg-zinc-700 flex justify-center px-4 py-20">
        <div className="w-70 h-full bg-green-400 flex flex-col justify-center px-10 ">
          <form>
            <h2 className="text-white font-extrabold ">SUM CALCULATOR</h2>
            <Cont label="1st number" te="enter 1st number" onInputchange={(value)=>handleInputChange(0,value)} />
            <Cont label="2nd number" te="enter 2nd number" onInputchange={(value)=>handleInputChange(1,value)}/>
            <Cont label="3rd number" te="enter 3rd number" onInputchange={(value)=>handleInputChange(2,value)}/>
          </form>
          <div className="justify-center  justify-between flex flex-col px-10 ">
            <button className="bg-zinc-400 px-10 py-2 my-2" onClick={calc} >claculate</button>
            
           <p>your sum is {res}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

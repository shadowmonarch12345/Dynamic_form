import React, { useState } from "react";

function Cont({ label, te, onInputchange }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputchange(value);
  };
  return (
    <>
      <div className="justify-between py-2 justify-center">
        <div className="justify-center py-1 px-10 ">
          <h2>{label}</h2>
        </div>
        <input
          type="text"
          placeholder={te}
          className="px-4 mx-3"
          value={inputValue}
          onChange={handleChange}
        ></input>
      </div>
    </>
  );
}

export default Cont;

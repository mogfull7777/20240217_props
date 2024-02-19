import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useItems } from "../api/Context";

function InputComponent() {
  const [inputValue, setInputValue] = useState("");
  const { addItem } = useItems();
  const navi = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(inputValue);
    setInputValue("");
    navi("/display");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">추가</button>
    </form>
  );
}

export default InputComponent;

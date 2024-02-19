import React from "react";
import { useItems } from "../api/Context";

function DisplayComponent() {
  const { items } = useItems();

  return (
    <div>
      <h1>display 입니다</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayComponent;

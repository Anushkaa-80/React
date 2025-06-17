import React, { useState } from "react";

function randomColor() {
  const [color, setColor] = useState("#ffffff");

  function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++)
      randomColor += letters[Math.floor(Math.random() * 16)];

    setColor(randomColor);
  }

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
      }}
    >
      <h1> Random Color Generator</h1>
      <p>Current color:{color}</p>
      <button onClick={generateRandomColor}>Generate Random Color</button>
    </div>
  );
}

export default randomColor;

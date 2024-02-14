//*** In JavaScript ***//

/* const heading = document.createElement("h1");
    heading.innerHTML = "hello world!"
    
    const root = document.getElementById("root"); 
    root.appendChild(heading); */

//*** In React ***//
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

/* ==> 
    React.createElement("element tag", {attributes}, child element/ [array of child element tags]) 
    <== */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

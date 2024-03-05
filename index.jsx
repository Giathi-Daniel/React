// Importing the becessary modules from the React library
import React from "react";
import ReactDOM from "react-dom";

// Defining a fucntional component named HelloWorld
function HelloWorld() {
    return <h1>Hello, World!</h1>;
}

// Render the HolloWorld component inside the root element of the HTML Doc
ReactDOM.render(
    <React.StrictMode>
        <HelloWorld />
    </React.StrictMode>,
    document.getElementById("root")
)
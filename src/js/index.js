//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";


//numero de segundos que han pasado desde que se inició la app

let seconds = 0;

//render your react application
setInterval(() => {
    ReactDOM.render(<SecondsCounter seconds = {seconds}/>, document.querySelector("#app")); seconds ++;
},1000);


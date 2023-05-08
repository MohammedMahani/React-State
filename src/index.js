import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


//   const [count, setCount] = useState(0);
// 2

// const [color, setColor] = useState('white');
// const handleColor = (color)=>{
//   setColor(color)
// }

// const colors = ['red', 'blue', 'green'];
// return(

// <div className="App">
// {colors.map((ele, index) => (
//   <button key={index} onClick={() => handleColor(ele)} style={{ backgroundColor: ele }}>
//     {ele}
//   </button>
// ))}
// <div style={{ backgroundColor: color }}>Selected Color: {color}</div>
// </div>

// )  


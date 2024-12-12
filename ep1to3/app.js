import React from "react";
import ReactDOM  from "react-dom/client";

//React element
const heading = React.createElement("h1",{id:"heading"},"Namaste react using React");
//React Components
//class based components - OLD
//functional based component - NEW
const Title = function(){
    return (

    <h1 className="heading" tabIndex="5">Namaste react using jsx 🐱‍🚀</h1>
)};

const element = <h1>Namaste react element🐱‍🚀</h1>
const number =10000
//functional based component
const HeadingComponent=()=>(
    <div id="container">
        <Title />
        {number}
        {element}
        {Title()}
        <h2>{100+20}</h2>
        <h1 className="heading">Namaste React Functional Component🚀</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />) 
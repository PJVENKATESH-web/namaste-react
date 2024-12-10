const heading = React.createElement("h1", {id:"heading"},"Hello world from React!");
console.log(heading); //here in react heading is object
const root=ReactDOM.createRoot(document.getElementById("root"));//root is the place the whole code will render
root.render(heading); //object will get render by the root element that convert into the html code

/*

<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

const parent =React.createElement(
    "div", 
    {id:"parent"},
    React.createElement("div",
    {id:"child"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")]
    )
);
console.log("parent");
const root=ReactḌŌM.createRoot(document.getElementById("root"));
root.render(parent);

*/

/*
<div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

const parent =React.createElement(
    "div", 
    {id:"parent"},
    [React.createElement("div",
    {id:"child1"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")]
    ),
    React.createElement("div",
    {id:"child2"},
    [React.createElement("h1",{},"I'm an h1 tag"),
    React.createElement("h2",{},"I'm an h2 tag")]
)]
);
console.log("parent");
const root=ReactḌŌM.createRoot(document.getElementById("root"));
root.render(parent);
*/

//JSX-react is only written in jsx

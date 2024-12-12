#namaste react

const jsxHeading = <h1 id="heading">Namaste react using jsx</h1>
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(jsxHeading)

//React element
const heading = React.createElement("h1",{id:"heading"},"Namaste react using React");

//parcel
-dev build
-local server
-fast refreshing-HMR===Hot module replacement
-File watching algorithm-written in C++
-Caching[in .parcel-cache]-faster builds
-image optimization
-minification
-bundling
-compressing
-consistent hashing
-code splitting
-differential bundling-when app is hoisted -support older browsers
-diagnostic-beautiful error showing
-error handling
-tree shaking -will remove unused code which parcel will remove unwanted code 
-HTTPS
-different dev and prod bundles
 
//parcel.org [read it about this ]


//to work our app in the browsers-browserlist.dev site and add the list of versions in the package.json
//query composition -which help to know in the particular country

//JSX -HTML/XML like syntax

//babel will convert the jsx code into respective code that understand by the JS engine with the help of parcel
//JSX(transpiled before it reaches the JS) - PARCEL - Babel
//JSX=> React.createElement=>ReactElement -JS-Object=>HTMLElement(render)
//Babeljs.io=>javascript compiler=>helps to convert the JSX to React.createElement


in HTML => we give class
in JSX =>we give className
//how to write the different tags in jsx(tabIndex)

//JSX will take only single line statement, if you want to write in multiple lines, use parenthesis

//prettier,bracket pair colorization,better comments ->extensions

//React components- 
2 types of components-class based components(old way), functional component(new way)
//component names start with capital letter
//function which is returning the piece of JSX code is the functional component
//functional based component
const HeadingComponent=()=>{
    return <h1>Namaste React Functional Component</h1>
}
[OR]
//functional component which having single line can skip the return keyword as we use this in arrow function
<!-- 
const HeadingComponent = () => <h1>Namaste React Functional Component</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)  
-->
const Title = function(){
    return (
    <h1 className="heading" tabIndex="5">Namaste react using jsx 🐱‍🚀</h1>
)
};
const element = <h1>Namaste react element🐱‍🚀</h1>


const number =10000
//functional based component
const HeadingComponent=()=>(
    <div id="container">
        <Title />
        {number}
        {element}
        <h2>{100+20}</h2>
        <h1>Namaste React Functional Component</h1>
    </div>
)
//component composition => component inside another component

//component cannot be used before initialization: Reference Error

//if you a and b component inside one another, the page will load infinite as the function will run infinitely
//you can put an element into component
//you can put 1 componnent into another component
//you can put component into an element
//JSX will help to cross site scripting that if you use the data from the api and it won't mallecious
//you can call the component in the {}
{Title()}
//final copy that you can different types of element, function,component
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
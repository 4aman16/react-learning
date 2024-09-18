import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

// {/* <div id="parent">
//     <div id="child">
//         <h1 id="h1_tag">I am a h1 tag</h1>
//         <h1 id="h1_tag">I am a h1 tag</h1>

//     </div>
//     <div id="child2">
//         <h1 id="h1_tag">I am a h1 tag</h1>
//         <h1 id="h1_tag">I am a h1 tag</h1>

//     </div>


// </div> */}




// const parent = React.createElement("div", { id: "parent" }, 
//    [ React.createElement("div",{ id: "child" },
//     [ React.createElement("h1", { id: "h1_tag" },"This is a namaste react"),
//       React.createElement("h1", { id: "h1_tag" },"I am a h1 tag")]
//     ),
//     React.createElement("div",{ id: "child2" },
//     [ React.createElement("h1", { id: "h1_tag2" },"I am a h1 tag"),
//         React.createElement("h1", { id: "h1_tag2" },"I am a h1 tag")]
//     )
// ]
// );



// const heading=React.createElement("h1",
//     { id: "heading", xyz:"abc"},
//     "Hello World from the React");
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



// React.createElement ==> Object ==> HTMLelement(render)
// It wll replace not append the root div in index.html



//Core React
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from the React");

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX
// JSX is not HTML, it is a syntactic sugar for React.createElement


// JSX (transpiled before it reaches the JS engine) => done by parcel => parcel ask Babel to do it
// Babel - Js compiler converts the code jsx to react code

// JSX => Babel transpiles it to React.createElement => ReactElement-Js Object => HTML element(render)

// const jsxHeading = <h1 className="head" tabIndex="1" > Hi React! </h1>;

//React Component

// Class based component :- OLD
// Functional Component :- NEW

// const HeadingComponent = () => {
//     return <h1 className="head" tabIndex="1" > Hi React-Hello Hi heading component! </h1>;
// }
 
// const HeadingComponentWithOutReturn = () => (
//     <div className="container">
//      <HeadingComponent />
//      <h1 className="head" tabIndex="1" > Hi React Hello! </h1>
//     </div>
//     ); // this is same as above
 
// const Task1 = () => 
//     (
//         <div className="container">
//             <HeadingComponent />
//             <HeadingComponentWithOutReturn />
//             <h1 className="head" tabIndex="1" > Hi React Hello! without return</h1>
//             <h1 className="head" tabIndex="1" > Hi React Hello! without return </h1>
//         </div>
//     )

//    const numeric = 1000
    // const data = api.getData(); // malicious data can be prevented by JSX remember Cross site scripting
// const Task2 = () => {
//     return (
//             <div className="container">
//                 {HeadingComponent()}
//                 <HeadingComponent />
//                 <HeadingComponentWithOutReturn />
//                 <h2>{ console.log("hi")}</h2> 
//                 {jsxHeading}
//                 <h1 className="head" tabIndex="1" > Hi React Hello! with return</h1>
//                 <h1 className="head" tabIndex="1" > Hi React Hello! with return </h1>
//             </div>
//         )
//     }


// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Task2 />);


// Java script object for inline css i react



// not using keys (nt acceptable) <<<< indx as key <<<<<<< unique id (best practice)




const AppLayout = () => {
  console.log(<Body/>)
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )


}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

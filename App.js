{/* <div id="parent">
    <div id="child">
        <h1 id="h1_tag">I am a h1 tag</h1>
        <h1 id="h1_tag">I am a h1 tag</h1>

    </div>
    <div id="child2">
        <h1 id="h1_tag">I am a h1 tag</h1>
        <h1 id="h1_tag">I am a h1 tag</h1>

    </div>


</div> */}




const parent = React.createElement("div", { id: "parent" }, 
   [ React.createElement("div",{ id: "child" },
    [ React.createElement("h1", { id: "h1_tag" },"I am a h1 tag"),
      React.createElement("h1", { id: "h1_tag" },"I am a h1 tag")]
    ),
    React.createElement("div",{ id: "child2" },
        [ React.createElement("h1", { id: "h1_tag2" },"I am a h1 tag"),
          React.createElement("h1", { id: "h1_tag2" },"I am a h1 tag")]
        )]
);



// const heading=React.createElement("h1",
//     { id: "heading", xyz:"abc"},
//     "Hello World from the React");
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
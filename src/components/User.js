import {useState} from "react";

const User = (props) => {

    const [count, setCount]=useState(0);
    return (

        <div className="user-card">
            {/* <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button> */}
            <h1>User : {props.name}</h1>
            <h2>Name :- Aman</h2>
            <h3>Location: Dehradun</h3>
            <h2>Linkedln</h2>
        </div>
    )
}

export default User;
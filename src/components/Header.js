import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{

    const [btnName, setBthName] = useState("Login");

    btnChange = () => {

        // if(btnName === "Login"){
        //     setBthName("Logout");
        // }else{
        //     setBthName("Login");
        // }

        btnName === "Login" ? setBthName("Logout") : setBthName("Login")
        
    }

    //Useeffct : if no dependency array is called on every component rendered
    useEffect(()=>{
    console.log("Header Rendered first", btnName);
    },[]);

    const onlineStatus = useOnlineStatus();

    return (
        console.log("Header Rendered first", btnName),
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src = {LOGO_URL} />

            </div>
            <div className="nav-items"> 
                <ul>
                    <li> Online Status:{onlineStatus ? "O" : "X" }</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick = { () => {btnChange(btnName)}} > {btnName}</button>
                </ul>
        </div>
    </div>
    )
}

export default Header;
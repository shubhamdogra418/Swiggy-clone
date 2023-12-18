import React, {useState} from "react";
import Logo from "../assets/freshfood.jpg";
// import { Logo, SimpaTacos } from "../constants/config";
import { Link } from "react-router-dom";
import Body from "./Body";

export const Title =()=> {
    return (
        <img className="logo" src={Logo}/>
    )
}

const Header = () =>{

    const[isLoggedIn, setIsLoggedIn]=useState(false);
    return (
        <div className="header">
            <Title/>    
            <div>
                <ul className="nav-items">
                    <li> <Link to="/"> Home</Link> </li> 
                    <li> <Link to="/about"> About </Link></li>
                    <li> <Link to="/contact"> Contact</Link></li>
                    <li> <Link to="/cart"> Cart</Link></li>
                </ul>
            </div>
            {isLoggedIn ? <button onClick={(e)=> setIsLoggedIn(false)}> LogIn</button> :
            <button onClick={(e)=>setIsLoggedIn(true)}> Logout</button> }
        </div>
    )
}


export default Header;
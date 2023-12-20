import React, {useState,useContext} from "react";
import Logo from "../assets/freshfood.jpg";
// import { Logo, SimpaTacos } from "../constants/config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

export const Title =()=> {
    return (
        <img className="h-20" src={Logo}/>
    )
}
//getting the context data--- as object


const Header = () =>{
const { user }= useContext(UserContext);

    const isOnline = useOnline();
    const[isLoggedIn, setIsLoggedIn]=useState(false);
    return (
        <div className="flex justify-between font-bold text-green-600">
            <Title/>    
            <div>
                <ul className=" flex justify-between py-5">
                    <li className="px-2"> <Link to="/"> Home</Link> </li> 
                    <li className="px-2"> <Link to="/about"> About </Link></li>
                    <li className="px-2"> <Link to="/contact"> Contact</Link></li>
                    <li className="px-2"> <Link to="/cart"> Cart</Link></li>
                    <li className="px-2"> <Link to="/instamart">InstaMart</Link></li>
                </ul>
            </div>
            {/* using custom hook */}
            <h1> {isOnline ? "✅" : "🔴"}</h1>
            <h1 className="text-blue-300"> {user.name} {user.college} </h1>
            {isLoggedIn ? <button class="font-bold text-green-500" onClick={(e)=> setIsLoggedIn(false)}> LogIn</button> :
            <button class="font-bold text-rose-600" onClick={(e)=>setIsLoggedIn(true)}> Logout</button> }
        </div>
    )
}


export default Header;
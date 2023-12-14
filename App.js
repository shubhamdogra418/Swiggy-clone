import React from "react";
import  ReactDOM  from "react-dom/client";

const Heading =(props)=> {
    return (
        <div>
            <Profile username="shubham.29_" password="shubham123"/>
            <h1> hello react from {props.fname} { props.lname} </h1>
            {about}
        </div>
    )
}

const Profile =(props) => {
    return (
        <div> 
            <h1> Profile is here {props.username} {props.password} </h1>
            <h1> component composition</h1>
        </div>
    )
}
const about = (
    <div>
        <h1> react element- simple and steady</h1>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading fname="abhsihek" lname="nath"/>)
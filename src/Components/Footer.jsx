import React, {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer =(props) => {
    const {user} = useContext(UserContext);
    const styleObj= {
        color:"yellow",
    }
    return (
        <div style={{backgroundColor: "red"}}>
            <h1 style={styleObj}> Footer Section</h1>
            <h2> {props.name}</h2>
            <h3> {user.name} </h3>
            <h1 className="font-bold text"> {user.name} {user.lname} </h1>

        </div>
    )
}

export default Footer;
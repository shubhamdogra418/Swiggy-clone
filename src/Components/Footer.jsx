import React from "react";

const Footer =(props) => {
    const styleObj= {
        color:"yellow",
    }
    return (
        <div style={{backgroundColor: "red"}}>
            <h1 style={styleObj}> Footer Section</h1>
            <h2> {props.name}</h2>
        </div>
    )
}

export default Footer;
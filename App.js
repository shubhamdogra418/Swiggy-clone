import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";





const App =()=> {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
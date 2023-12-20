import React, {lazy, Suspense, useState} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import Cart from "./src/Components/Cart";
import Profile from "./src/Components/Profile";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
// import InstaMart from "./src/Components/Instamart";

//lazy loading, on-demand loading, code splitting
//on intial render (takes time as react suspends it) the code is not there, once visted and loaded (SPA) 
// then it will load immediately, to avoid this suspense,we have to wrap it inside the suspense
//this is a prmise to resolve

const InstaMart= lazy(()=> import("./src/Components/Instamart"));
//Why aren't we using Anchor tag (it refreshes the whole page >>performance issues) >>SPA (shouldn't load )

const App =()=> {
    const[user, setUser]= useState( {
        name: "niharika",
        lname: "dogra",
    })

    return (
        <>
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
            }}>
        {/* {header and footer should always be here and content bw should change (outlet)} */}
            <Header/>
            {/* {alll the children goes to the outlet}  */}
            <Outlet/>
            <Footer name="shubham dogra as prop value"/>
            </UserContext.Provider>
        </>
    )
}


//On demand loading
//Code splitting
//Dynamic bundling
//Chunking
//Lazy loading
//Dynamic import



const AppRouter= createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>, 
        children: [ //children will fill the outlet
            {
                path: "/",
                element: <Body/>
            }, 
            {
                path: "about",
                element: <About/>, 
                children: [ //making an outlet
                    {
                        path: "profile",
                        element: <Profile/>
                    }
                ]
            }, 
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:resId", //:resId as params
                element:<RestaurantMenu/>
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<h1> Loading...</h1>}> <InstaMart/> </Suspense> 
            },
        ]
    }, 
    
    
])


const root=ReactDOM.createRoot(document.getElementById('root'));
//router going as props 
root.render(<RouterProvider router={AppRouter}/>)
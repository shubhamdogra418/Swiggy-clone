import React from "react";
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
//Why aren't we using Anchor tag (it refreshes the whole page >>performance issues) >>SPA (shouldn't load )

const App =()=> {
    return (
        <>
        {/* {header and footer should always be here and content bw should change (outlet)} */}
            <Header/>
            {/* {alll the children goes to the outlet}  */}
            <Outlet/>
            <Footer name="shubham dogra as prop value"/>
        </>
    )
}

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
                path:"restaurant/:resId", //:resId as params
                element:<RestaurantMenu/>
            }
        ]
    }, 
    
    
])


const root=ReactDOM.createRoot(document.getElementById('root'));
//router going as props 
root.render(<RouterProvider router={AppRouter}/>)
import React from "react";
import { RestaurantList } from "../constants/RestaurantList";

const ResInfo = {
    name: "paradise biryani",
    image: "",
    cuisines: ["indian", "chinese"],
    rating: "4.5",
}



//config driven UI
const RestaurantCard =(props) => {
    console.log(props);
    return (
        <div className="card">
            <img src=  {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                        +props.restaurant.data?.cloudinaryImageId}/>
            <h2> {props.restaurant.data?.name} </h2> 
            <h3> {props.restaurant.data?.area}</h3>
            <h4>{props.restaurant.data?. costForTwoString} ⭐ </h4>
            <h3> {props.restaurant.data?.cuisines.join(",")} </h3>
        </div>
    )
}


const Body =()=> {
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            {/* <h1> Body Section</h1> */}
            <RestaurantCard restaurant={RestaurantList[0]}/>
            <RestaurantCard restaurant={RestaurantList[1]}/>
            <RestaurantCard restaurant= {RestaurantList[2]}/>
            <RestaurantCard restaurant={RestaurantList[3]}/>
            <RestaurantCard restaurant={RestaurantList[5]}/>
        </div>
    )
}
export default Body;
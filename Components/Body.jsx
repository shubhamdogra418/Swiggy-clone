import React from "react";
import { RestaurantList } from "../constants/RestaurantList";

const ResInfo = {
    name: "paradise biryani",
    image: "",
    cuisines: ["indian", "chinese"],
    rating: "4.5",
}



//config driven UI
//from  {props] >> {{restaurant}} directly destructurig in the fly
const RestaurantCard =({restaurant}) => {
    // console.log(props);
//destructuring
    const {name, cloudinaryImageId, area, costForTwoString, cuisines}= restaurant.data;
    return (
        <div className="card">
            <img src=  {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                        +cloudinaryImageId}/>
            <h2> {name} 🍽   </h2> 
            <h3> {area}</h3>
            <h4>{costForTwoString} 🚻</h4>
            <h3> {cuisines.join(",")} </h3>
        </div>
    )
}


const Body =()=> {
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            {/* <h1> Body Section</h1> */}
{/* restaurant(bacause array name)={RestaurantList[0] >> from where we fetchi the data} */}
            <RestaurantCard restaurant={RestaurantList[0]}/>
            <RestaurantCard restaurant={RestaurantList[1]}/>
            <RestaurantCard restaurant= {RestaurantList[2]}/>
            <RestaurantCard restaurant={RestaurantList[3]}/>
            <RestaurantCard restaurant={RestaurantList[5]}/>
        </div>
    )
}
export default Body;
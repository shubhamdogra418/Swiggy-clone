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
const RestaurantCard =({name, cloudinaryImageId, area, costForTwoString, cuisines}) => {
    // console.log(props);
//destructuring
    // const {name, cloudinaryImageId, area, costForTwoString, cuisines}= restaurant.data;
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
            <RestaurantCard {...RestaurantList[0].data}/>
            <RestaurantCard {...RestaurantList[1].data}/>
            <RestaurantCard {...RestaurantList[2].data}/>
            <RestaurantCard {...RestaurantList[3].data}/>
            <RestaurantCard {...RestaurantList[5].data}/>
        </div>
    )
}
export default Body;
import React from "react";
import { RestaurantList } from "../constants/RestaurantList";


//config driven UI
//from  {props] >> {{restaurant}} >> {{name,cuisines, etc..}} directly destructurig in the fly
const RestaurantCard =({name, cloudinaryImageId, area, costForTwoString, cuisines}) => {
    // console.log(props);
//destructuring
    // const {name, cloudinaryImageId, area, costForTwoString, cuisines}= restaurant.data;
    return (
        <div className="card">
            <img src=  {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                        +cloudinaryImageId}/>
            <h3> {name} 🍽   </h3> 
            <h4> {area}</h4>
            <h4> {cuisines.join(",")} </h4>
            <h5>{costForTwoString} 🚻</h5>
            
        </div>
    )
}


const Body =()=> {
    return (
        <div style={{display: "flex", flexWrap:"wrap"}}>
            {
                RestaurantList.map((restaurant)=> {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/> })
            }
        </div>
    )
}
export default Body;
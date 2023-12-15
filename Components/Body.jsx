import React, { useState } from "react";
import { RestaurantList } from "../constants/RestaurantList";
import { IMG_CDN_URL } from "../constants/config";



//config driven UI
//from  {props] >> {{restaurant}} >> {{name,cuisines, etc..}} directly destructurig in the fly
const RestaurantCard =({name, cloudinaryImageId, area, costForTwoString, cuisines}) => {
//destructuring
    // const {name, cloudinaryImageId, area, costForTwoString, cuisines}= restaurant.data;
    return (
        <div className="card">
            <img src=  {IMG_CDN_URL + cloudinaryImageId}/>
            <h3> {name} 🍽   </h3> 
            <h4> {area}</h4>
            <h4> {cuisines.join(",")} </h4>
            <h5>{costForTwoString} 🚻</h5>
            
        </div>
    )
}


//not a component but a function to filter the searched data
    function filterData(searchText, restaurants)  {
       return restaurants.filter((e)=>e.data?.name.toLowerCase()?.includes(searchText.toLowerCase()));
    }

const Body =()=> {
    //not good way to declare varibales in react
    // const searchText= "Chicken Breast";
    const[searchText, setSearchText]= useState("");
    const[restaurants,setRestaurants]=useState(RestaurantList);
    console.log(searchText);
    return (
        <>
        <div className="search-container">
           <input 
                className="search-input" 
                placeholder="Search Here" 
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />
           <button 
                className="search-btn"
                onClick={()=> {
                    const data= filterData(searchText, restaurants); //parameters to a funcntion
                    setRestaurants(data);
                }}
            > Search </button> 
        </div>

        <div className="resCard">
            {
                restaurants.map((restaurant)=> {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/> })
            }
        </div>
        </>
    )
}
export default Body;
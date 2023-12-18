import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantData } from "../constants/RestaurantData";
import { RestaurantList } from "../constants/RestaurantList";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


//not a component but a function to filter the searched data
    function filterData(searchText, restaurants)  {
       return restaurants.filter((e)=>e.info?.name.toLowerCase()?.includes(searchText.toLowerCase()));
    }


const Body =()=> {
    //not good way to declare varibales in react
    // const searchText= "Chicken Breast";
    const[allRestaurants,setAllRestaurants]=useState([]);
    const[filteredRestaurants,setFilteredRestaurants]=useState(allRestaurants);
    const[searchText, setSearchText]= useState("");
    console.log(searchText);

    useEffect(  ()=> {
        getRestaurants();
    },[])

    async function getRestaurants () {
        const data= await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'            );
        const json= await data.json();
        // console.log(json);
    //from API
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //hardcoded data
        // setAllRestaurants(RestaurantData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(RestaurantData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline=useOnline();
    if(!isOnline) {
        return <h1>⛔ You're Offline, Check your Internet Connection</h1>
    }

    if (!allRestaurants) return <h1>No Restaurants Online at this moment</h1>
    if(filteredRestaurants?.length===0) return <Shimmer/>
    return allRestaurants?.length===0 ? <Shimmer/> : (
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
                    const data= filterData(searchText, allRestaurants); //parameters to a function
                    setFilteredRestaurants(data);
                }}
            > Search </button> 
        </div>

        <div className="resCard">   
            {
                filteredRestaurants.map((restaurant)=> {
                    return (
                        <Link  key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                     <RestaurantCard {...restaurant.info}/>  </Link>)}) 
                    // <RestaurantCard RestaurantList={restaurant}/>)})
            }
        </div>
        </>
    )
}
export default Body;
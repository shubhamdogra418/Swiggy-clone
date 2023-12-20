import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RestaurantData } from "../constants/RestaurantData";
import { RestaurantList } from "../constants/RestaurantList";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

//not a component but a function to filter the searched data
    function filterData(searchText, restaurants)  {
       return restaurants.filter((e)=>e.info?.name.toLowerCase()?.includes(searchText.toLowerCase()));
    }


const Body =()=> {
    const {user}= useContext(UserContext);
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
        <div className="pl-8">
           <input 
                className=" pl-3 rounded-2xl"   
                placeholder="Search Here" 
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                />

           <button 
                className="m-4 px-2 py-0 bg-green-400 text-white rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-green-500 duration-300 ..."
                onClick={()=> {
                    const data= filterData(searchText, allRestaurants); //parameters to a function
                    setFilteredRestaurants(data);
                }}
            > Search </button> 
            <input placeholder="hello" value={user.name} onChange={
                e=> setUser({
                    name: e.target.value})}>  </input>

        </div>

        {/* <div className="flex items-center">
					<button
						className="px-4 py-3/12 bg-blue-300 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-blue-400 duration-300 ..."
						onClick={() => {
							const filterlist = listofRestaurants.filter(
								(res) => res.info.avgRating > 4.0
							);
							setlistofRestaurants(filterlist);
						}}>
						Top Rated Restaurant
					</button>
				</div> */}

        <div className="flex flex-wrap bg-green -50" >   
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
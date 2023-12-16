import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_API } from "../constants/config";
import getRestaurantMenu from "../constants/getResmenu";
import Shimmer from "./Shimmer";


const RestaurantMenu =()=>{
    const {resId}= useParams();
    const resInfo= getRestaurantMenu(resId);
        // const={}


    if (resInfo==null) return <Shimmer/>

    const {name, cloudinaryImageId, areaName, cuisines, costForTwoMessage} = 
        resInfo?.cards[0]?.card?.card?.info;
    
    const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;



    return (
        <div>
        <div className="res-menu">
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
            <h2> {name}🍛 </h2> 
            <h3>{areaName} {city}</h3>
            <h4>{cuisines}</h4>
            <h5>{costForTwoMessage} {avgRating}⭐</h5>
        </div>

        <ul>
        {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - {" " + " ₹ "}
            {item.card.info.price/100 ||item.card.info.defaultPrice/100 }
            </li> ))}
        </ul>
        </div>

        

        
    )
}

export default RestaurantMenu;

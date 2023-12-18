import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_API } from "../constants/config";
// import getRestaurantMenu from "../constants/getResmenu";
import Shimmer from "./Shimmer";



const RestaurantMenu =() => {

    const {resId}=useParams();
    console.log(resId);

    const[resInfo,setResInfo]=useState(null);
    const[showIndex, setShowIndex]= useState(1);

    useEffect(()=> {
        fetchMenu();
    },[])

    async function fetchMenu () {
        const data=await fetch(MENU_API+resId);
        const json= await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }; 

    if(resInfo==null) return <Shimmer/>

    // console.log("resinfo is",resInfo.cards[0].card?.card?.info);
    const{name, areaName, cuisines, city, cloudinaryImageId, avgRating, costForTwoMessage}= 
    resInfo.cards[0]?.card?.card?.info;
    console.log(resInfo);

    const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    const categories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		); 
        console.log(categories);


        return (
            <div className="menu-box">
            <div className="card">
                <img src=  {IMG_CDN_URL + cloudinaryImageId}/>
                <h3> {name} 🍛 </h3> 
                <h4> {areaName}, {city} {avgRating}⭐</h4>
                <h4> {cuisines.join(", ")} </h4>
                <h5>{costForTwoMessage} 🚻 </h5>
            </div>
            <ul className="list"> 
                {itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - {" " + " ₹ "}
                {item.card.info.price/100 || item.card.info.defaultPrice/100} 
                </li>
            ))}
            
        </ul>
        {/* {categories.map((category, index) => (
				<RestaurantCategory
					key={category.card.card.title}
					data={category?.card?.card}
					showItems={index === showIndex ? true : false}
					setShowIndex={() => setShowIndex(index)}
				/>
			))} */}
            </div>
        )
    }


export default RestaurantMenu;

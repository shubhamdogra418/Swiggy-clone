import { IMG_CDN_URL } from "../constants/config";


//config driven UI
//from  {props] >> {{restaurant}} >> {{name,cuisines, etc..}} directly destructurig in the fly
const RestaurantCard =({name, cloudinaryImageId, areaName, costForTwo,id, locality, avgRating, cuisines}) => {
    //destructuring
        // const {name, cloudinaryImageId, area, costForTwoString, cuisines}= restaurant.data;
        return (
            <div className="card">
                <img src=  {IMG_CDN_URL + cloudinaryImageId}/>
                <h3> {name} 🍛  {id} </h3> 
                <h4> {areaName}, {locality} {avgRating}⭐</h4>
                <h4> {cuisines.join(", ")} </h4>
                <h5>{costForTwo} 🚻 </h5>
            </div>
        )
    }

    export default RestaurantCard;
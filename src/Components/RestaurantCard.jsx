import { IMG_CDN_URL } from "../constants/config";


//config driven UI
//from  {props] >> {{restaurant}} >> {{name,cuisines, etc..}} directly destructurig in the fly
const RestaurantCard =({name, cloudinaryImageId, areaName, costForTwo,id, locality, avgRating, cuisines}) => {
    //destructuring
        // const {name, cloudinaryImageId, area, costForTwoString, cuisines}= restaurant.data;
        return (
            <div  className=" w-64 m-4 p-3 rounded-lg  hover:scale-110 shadow-zinc-500  hover:shadow-lg flex-wrap justify-start bg-white">
                <img className="w-64 h-45 rounded-lg align-middle" src=  {IMG_CDN_URL + cloudinaryImageId}/>
                <h3 className=" font-bold bg-clip-content truncate break-words text-lg"> {name} 🍛  {id} </h3> 
                <h4 className="flex items-center text-xs font-semibold mx-2 "> {areaName}, {locality} {avgRating}⭐</h4>
                <h4 className="cuisines flex-wrap bg-clip-content truncate "> {cuisines.join(", ")} </h4>
                <h5 className="heading text-sm justify-between  text-black font-semibold">{costForTwo} 🚻 </h5>
            </div>
        )
    }

    export default RestaurantCard;
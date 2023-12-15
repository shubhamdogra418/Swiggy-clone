import { useParams } from "react-router-dom";

const RestaurantMenu =()=> {
//taking resId as params
    // const params= useParams();
    // const {resId}= params;
    // console.log(params);
//destructure on the fly
    const {resId}= useParams();
    console.log(resId);
    return (
        <div>
            <h1> Here's Your Restsurant Menu id: {resId} </h1>
            <h2> khaali </h2>
        </div>
    )
}

export default RestaurantMenu;
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./config";


const getRestaurantMenu =()=>{
    const {resId}=useParams();
    console.log(resId);

    const[resInfo,setResInfo]=useState(null);

    useEffect(()=> {
        fetchMenu();
    },[])

    async function fetchMenu () {
        const data=await fetch(MENU_API+resId);
        const json= await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }; return resInfo;
}

export default getRestaurantMenu;
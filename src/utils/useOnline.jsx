import {useState,useEffect} from "react";

//load the body only when useOnline is true 



const useOnline =() => {
    const [isOnline,setIsOnline] = useState(true);
    // useEffect(()=> {
    //     //to make return easy we made seprate functional components 
    //     const handleOnline =()=> {
    //         setIsOnline(true);
    //     }
    //     const handleOffline =()=>{
    //         setIsOnline(false);
    //     }
    //     // window.addEventListener("online", ()=> {
    //     //     setIsOnline(true);
    //     // }) //not good code
    //     window.addEventListener("online", handleOnline);
    //     window.addEventListener("offline", handleOffline);

    //     return  () => {
    //         window.removeEventListener(handleOnline);
    //         window.removeEventListener(handleOffline);
    //     };
    // },[]) //on-mounting
    // return isOnline;

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });

        window.addEventListener("online",()=>{
            setIsOnline(true);
        });
    },[]);

    return isOnline;
};

//just made a custom-hook
export default useOnline;

//have to remove eventListener otherwise it will keep mounting up and make app slow
//return useEffect
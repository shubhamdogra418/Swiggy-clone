import { useState } from "react"

const Section =({name, place,description}) => { //de-structure on the fly
    const[isVisible,setIsVisible] =useState(false);
    return (
        <div className="m-2 border border-blue-600"> 
            <h1 className="font-bold">{name} </h1>
            <h2 className="font-bold">{place}  </h2>
            
            {isVisible ? //accordian (collapsable accordian) 
                    <button onClick={(e)=> setIsVisible(false)}  
                    className="bg-red-500 text-white w-20 rounded-2xl m-2 cursor-pointer"> Hide</button>
                    : <button onClick={(e)=> setIsVisible(true)}  
                    className="bg-green-500 text-white w-20 rounded-2xl m-2 cursor-pointer"> Show</button>
            }             
            {isVisible && <h3 className="font-thin"> {description} </h3>}
        </div>
    )
}



//from individual control to parent control
const InstaMart =()=> { //now parent is controlling all these sub-components
//    const [visibleSection, setVisibleSection]=useState();
    return(
        <div>
            <h1 className="text-red-500 font-bold px-10"> InstaMart Welcome's you</h1>
            <Section className="font-bold" name="About" place="Delhi" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                // isVisible={visibleSection==="about"}
                // setIsVisible={() => setVisibleSection("about")}
               
                />
            
            <Section name="Team" place="Chandigarh" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                // isVisible={visibleSection==="team"}
                // setIsVisible={()=> setVisibleSection("team")}
                />

            <Section name="Career" place="Gurugram" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                // isVisible={visibleSection==="career"}
                // setIsVisible={()=> setVisibleSection("career")}
                />
        </div>
    )
}

export default InstaMart;
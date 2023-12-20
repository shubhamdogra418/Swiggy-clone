import { createContext } from "react";
//wrap up the date in context which we want in our whole application
//data inside the useContext is available to the whole application

const UserContext= createContext({
    user: {
        name:"shubham",
        college: "chandigarh university"
    },
    info: {
        bank: "SBI",
        acc: "1902872877",
    } 
});
export default UserContext;



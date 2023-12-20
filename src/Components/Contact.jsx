import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Contact =() => {
    const {user} =useContext(UserContext);
    return (
        <div>
            <h1>Welcome to Foodies's Home</h1>
            <h1 className="font-bold text"> {user.name} {user.lname} </h1>
        </div>
    )
}

export default Contact;
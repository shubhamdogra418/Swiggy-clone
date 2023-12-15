import { Link } from "react-router-dom";
import { AnotherProfile } from "./ProfileClass";

const Profile =()=> {
    return (
        <div>
            <h2> hello Shubham Here as outlet</h2>
            <ul className="links">
                <li> <Link to="https://github.com/shubhamdogra418"> Github</Link></li>
                <li> <Link to="https://www.linkedin.com/in/shubham-dogra-1883roll418/"> LinkedIn </Link></li>
                <li> <Link to="https://leetcode.com/shubhamdogra/"> LeetCode</Link></li>
                <AnotherProfile/>
            </ul>
        </div>
    )
}

export default Profile;
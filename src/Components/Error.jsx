import { useRouteError } from "react-router-dom";
const Error =()=> {
    const err = useRouteError();
    return (
        <div>
            <h1> Oops Page Broken!!! </h1>
            <h3> This is because you have custom error page</h3>
            <h4>{err.status + " "+ err.statusText}</h4>
            <h4> {err.data} </h4>
        </div>
    )
}
export default Error;
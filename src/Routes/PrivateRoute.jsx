import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user , loading } = useContext(AuthContext);
    if(loading){
         return <progress className="progress progress-warning w-56" value="100" max="100"></progress>
    }
    if(user){
         return children
    }
    return <Navigate to='/' replace></Navigate>
};

export default PrivateRoute;
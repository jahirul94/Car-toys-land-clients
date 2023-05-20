import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const PrivateRoute = ({ children }) => {
     const location = useLocation();
     const { user, loading } = useContext(AuthContext);
     document.title = location?.pathname.split("/")[1] + "-" + "Car Toys Land" || "Car Toys Land" ;
     if (loading) {
          return <div className="min-h-screen lg:flex items-center justify-start"><img src="https://content.pymnts.com/wp-content/uploads/2016/06/Slow-load-times-eCommerce.png" alt="" className="min-w-full" /></div>
     }
     if (user) {
          return children
     }
     else if(!user){
          Swal.fire({
               icon: 'error',
               title: 'Oops...user not found',
               text: 'You have to log in first to view details!',
             })
     }
     return <Navigate to='/login' state={{from : location }} replace></Navigate>
};

export default PrivateRoute;
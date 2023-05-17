import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="lg:flex h-screen">
              <div className="text-center pt-28 space-y-16 bg-yellow-500 lg:w-1/2">
                  <h2 className="text-9xl mx-auto text-orange-600 font-extrabold"> 404 </h2>
                   <h3 className="text-5xl font-bold">Look Link You are Lost in Space </h3>
                   <button className="bg-blue-600 text-white px-6 py-2 text-xl font-bold rounded-lg"><Link className="flex items-center"><FaArrowCircleLeft className="me-2"></FaArrowCircleLeft> Go Back Home </Link></button>
              </div>
              <div className="lg:w-1/2">
                  <img className="h-screen" src="https://thumbs.dreamstime.com/b/error-page-not-found-grunge-style-vector-error-page-not-found-grunge-style-made-vector-offroad-tire-prints-lost-internet-199453155.jpg" alt="" />
              </div>
        </div>
    );
};

export default ErrorPage;
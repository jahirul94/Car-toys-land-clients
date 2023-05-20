import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen">
            <div className="hero lg:min-h-screen sm:image-full rounded-2xl" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/001/857/111/original/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg")` }}>
                <div className="mt-44">
                    <button className="bg-blue-600 text-white px-6 py-2 text-xl font-bold rounded-lg mt-96"><Link className="flex items-center"><FaArrowCircleLeft className="me-2"></FaArrowCircleLeft> Go Back Home </Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Toys = ({ toy }) => {
    const { name ,  _id , toysPicture, price, rating } = toy ;
    return (
        <div data-aos="fade-up" className="card bg-base-100 shadow-xl">
            <figure><img className="max-h-64" src={toysPicture} alt="Shoes" /></figure>
                <div className="card-body">
                     <h2 className="card-title font-bold">{name}</h2><hr />
                     <p className="font-semibold my-0 py-0">Price : ${price}</p>
                <div>
                    <h6 className="m-0">Overall Rating</h6>
                    <div className="flex m-0">
                        <span className="me-2">{rating} </span>
                         <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
                <div className="card-actions justify-end mt-2">
                     <Link className="w-full" to={`/allToys/${_id}`}><button className="btn btn-primary w-full">View Details <FaArrowRight className="ms-2"></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Toys;
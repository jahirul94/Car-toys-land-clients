import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from "react-icons/fa";

const Toys = ({ toy }) => {
    const { name, _id, category,  toysPicture, price, rating } = toy ;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="max-h-64" src={toysPicture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : ${price}</p>
                <div>
                    <h6>Overall Rating</h6>
                    <div className="flex">
                        <span className="me-2">{rating}</span>
                         <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">View Details <FaArrowRight className="ms-2"></FaArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default Toys;
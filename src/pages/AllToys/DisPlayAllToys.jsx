import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisPlayAllToys = ({ toy }) => {
    const { name, sellerName, _id, category, availableQuantity , toysPicture, price } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="max-h-64" src={toysPicture} alt="picture Not found" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2><hr />
                <h2 className="text-md font-semibold">Seller : {sellerName}</h2>
                <p className="font-semibold my-0 py-0">Sub-category : {category}</p>
                <p className="font-semibold my-0 py-0">Price : ${price}</p>
                <p className="font-semibold my-0 py-0">Available Quantity : {availableQuantity}</p>
                <div className="card-actions justify-end mt-2">
                    <Link className="w-full" to={`/allToys/${_id}`}><button className="btn btn-primary w-full">View Details <FaArrowRight className="ms-2"></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default DisPlayAllToys;
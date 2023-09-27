import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
    const loadedData = useLoaderData();
    const { name, sellerEmail, sellerName, availableQuantity, toysPicture, price, detailDescription, rating } = loadedData;
    return (
        <div className="min-h-screen lg:flex space-x-10">
            <img className="w-1/2 m-10 rounded-2xl" src={toysPicture} alt="" />
            <div className="w-1/2 m-10 rounded-2xl my-auto pb-28 pt-10">
                <h2 className="text-3xl font-bold mb-6">{name}</h2>
                <h2 className="text-xl font-semibold">Seller : {sellerName}</h2>
                <h2 className="text-xl font-semibold">Seller Email : {sellerEmail}</h2>
                <h2 className="text-xl font-semibold">Price : ${price}</h2>
                <h2 className="text-xl font-semibold">Available Quantity : {availableQuantity}</h2>
                <div className="my-4">
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
                    <h2 className="font-semibold">Description : {detailDescription}</h2>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;
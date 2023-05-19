import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const DisplayMyToys = ({ myToy, handleDelete }) => {
    const { name, toysPicture, category, price, availableQuantity, _id } = myToy;

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    <tr>
                        <td className="w-2/6">
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-20 h-20">
                                        <img src={toysPicture} alt="Picture not available" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                </div>
                            </div>
                        </td>
                        <td className="text-center w-1/6">
                            <p className="text-xs font-semibold">Price : ${price}</p>
                            <p className="text-xs font-semibold">Quantity : {availableQuantity}</p>
                        </td>
                        <td className="w-2/6">
                            <p className="text-md font-semibold">Category : {category}</p>
                        </td>
                        <td className="w-1/6">
                            <Link to={`/myToys/${_id}`}><button className="btn btn-outline btn-primary me-0">Update Toys</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error ms-2"><FaTrash></FaTrash></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DisplayMyToys;
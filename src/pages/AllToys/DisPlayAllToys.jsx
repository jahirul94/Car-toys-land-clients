import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const DisPlayAllToys = ({ toy }) => {
    const { name, sellerName, _id, category, availableQuantity, price } = toy;
    return (
        <tr>
            <td>
                <p>{sellerName}</p>
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p className="text-center">{category}</p>
            </td>
            <td>
                <p className="text-center">${price}</p>
            </td>
            <td>
                <p className="text-center">{availableQuantity}</p>
            </td>
            <td>
                <Link className="w-full flex" to={`/allToys/${_id}`}><button className="btn btn-primary">View Details <FaArrowRight className="ms-2"></FaArrowRight></button></Link>
            </td>
        </tr>

    );
};

export default DisPlayAllToys;

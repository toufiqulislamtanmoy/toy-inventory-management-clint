import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
const AllToyysSingleRow = ({ singleToy }) => {
    const { _id, subCategory, rating, price, quantity, userName, toyUrl, toyName, userEmail } = singleToy;
    return (

        <tr>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={toyUrl} alt="Toy Thumbnail" />
                    </div>
                </div>
            </td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>
                {userName}
                <br />
                <span className="badge badge-ghost badge-sm ">{userEmail}</span>
            </td>
            <td>{price} <span className="text-3xl">৳</span> </td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <div className="flex items-center justify-center">
                    <Link to={`/toyditails/${_id}`} className="btn bg-lime-500">
                        <FaEye className="mx-2" /> View Details
                    </Link>
                </div>
            </td>

        </tr>
            


    );
};

export default AllToyysSingleRow;
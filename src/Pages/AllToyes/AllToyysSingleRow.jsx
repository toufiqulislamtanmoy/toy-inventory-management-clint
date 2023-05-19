import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
const AllToyysSingleRow = ({ singleToy }) => {
    const { _id, subCategory, rating, description, price, quantity, userName, toyUrl, toyName, userEmail } = singleToy;
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 space-y-5 p-5 shadow">
            <div className="flex flex-col items-center justify-center space-y-4">
                <img className="w-24" src={toyUrl} alt="" />
                <h2 className="font-semibold text-xl">{toyName}</h2>
                <h4>{subCategory}</h4>
            </div>
            <div className="flex items-center justify-center">
                <h2><span className="font-bold">Seller Name :</span> {userName}</h2>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center">
                <h2><span className="font-bold">Price: </span> {price} <span className="text-3xl">৳</span></h2>
                <h2><span className="font-bold">Quantity: </span>{quantity}</h2>
            </div>
            <div className="flex items-center justify-center">
            <Link to={`/toyditails/${_id}`} title="View Details" className="btn"><FaEye/></Link>
            </div>
        </div>
    );
};

export default AllToyysSingleRow;
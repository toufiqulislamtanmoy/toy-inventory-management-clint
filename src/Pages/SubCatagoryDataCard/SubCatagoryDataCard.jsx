import Rating from "react-rating";
import { Link } from "react-router-dom";
import { FaStar,FaRegStar } from "react-icons/fa";
const SubCatagoryDataCard = ({ singleData }) => {
    const { _id, subCategory, rating, description, price, quantity, userName, toyUrl, toyName, userEmail } = singleData;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="w-2/4 h-3/4" src={toyUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyName}
                </h2>
                <p>Price: {price}Tk</p>
                <p>{description}</p>
                <p title={rating}>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                        readonly
                    />
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{subCategory}</div>
                    <div className="badge badge-outline">Action Figure</div>
                </div>
                <div className="card-actions justify-start mt-5">
                    <Link to={`/toyditails/${_id}`} className="btn btn-outline">See More Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SubCatagoryDataCard;
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import useTitle from '../../CustomHooks/useTitle';
const ToyDetails = () => {
    useTitle("Toy Details");
    const singleToyDetails = useLoaderData()
    const { userName, userEmail, rating, description, price, quantity, toyUrl, toyName, subCategory } = singleToyDetails;
    return (
        <div className="card mx-auto my-7 max-w-7xl bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='w-[200px] h-[200px]' src={toyUrl} />
            </figure>
            <div className="card-body text-justify">
                <h2 className="card-title">
                    <span className="font-bold">Toy Name: </span>
                    {toyName}
                </h2>
                <h2 className="card-compact">
                    <span className="font-bold">Sub Category: </span>
                    {subCategory}
                </h2>
                <h2 className="card-compact">
                    <span className="font-bold">Seller Name: </span>
                    {userName}
                </h2>
                <h2 className="card-compact">
                    <span className="font-bold">Seller Email: </span>
                    {userEmail}
                </h2>
                <h2 className="card-compact">
                    <span className="font-bold">Price: </span>
                    {price}
                    <span className="text-3xl">৳</span>
                </h2>
                <h2 className="card-compact flex gap-2 items-center ">
                    <span className="font-bold">Rating: </span>
                    {rating}
                    <span className="text-yellow-300">
                        <FaStar />
                    </span>
                </h2>
                <h2 className="card-compact">
                    <span className="font-bold">Quantity: </span>
                    {quantity}
                </h2>
                <p>
                    <span className="font-bold">Description: </span>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ToyDetails;
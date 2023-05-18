import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
const MytoysRow = ({ singleToy,index }) => {

    const { rating, description, price, quantity, userName, toyUrl, toyName, userEmail } = singleToy;

    return (
        <tr>
            <td>{index+1}</td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={toyUrl} alt="Toy Thumbnail" />
                    </div>
                </div>
            </td>
            <td>{toyName}</td>
            <td>
                {userName}
                <br />
                <span className="badge badge-ghost badge-sm ">{userEmail}</span>
            </td>
            <td>{price} <span className="text-3xl">৳</span> </td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <span className=" w-[220px]">
                  {description.length < 50 ? description : description.substring(0, 50)}...
                </span>
                <br />

            </td>
            <td className="space-x-4">
                <button><FaPencilAlt className="text-green-500" /></button>
                <button><FaTrash className="text-red-500" /></button>
            </td>
        </tr>
    );
};

export default MytoysRow;
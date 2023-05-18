import { useContext, useEffect, useState } from "react";
import useTitle from "../../CustomHooks/useTitle";
import MytoysRow from "./MyToysRow/MytoysRow";
import { AuthContext } from "../../Provider/AuthProvider";
const MyToys = () => {
    useTitle("My Toys")
    const { user } = useContext(AuthContext);
    const [userToys, setUserToys] = useState([]);
    const url = `https://toy-monster-server.vercel.app/toys/?email=${user.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setUserToys(data)
            console.log(data)
        })
    }, [url])
    const handelSort = (event) => {
        const sortCategory = parseInt(event.target.value);
        // Perform sort operation based on the selected category
        console.log(typeof sortCategory, sortCategory);
        // ...
    };
    return (
        <div className="overflow-x-auto h-[100vh]">
            <table className="table table-zebra w-full text-center">
                <thead>
                    <tr>
                        <th>
                            <div className="input-group">
                                <select onChange={handelSort} className="select select-bordered">
                                    <option disabled selected>Sort By</option>
                                    <option value={1}>Less Price</option>
                                    <option value={-1}>High Price</option>
                                </select>
                            </div>
                        </th>
                        <th>Toy Thumbnail</th>
                        <th>Toy Name</th>
                        <th>User Info</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userToys.map((singleToy, index) =>
                            <MytoysRow key={singleToy._id} singleToy={singleToy}
                                index={index}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
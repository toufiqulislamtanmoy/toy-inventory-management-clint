import { useContext, useEffect, useState } from "react";
import useTitle from "../../CustomHooks/useTitle";
import MytoysRow from "./MyToysRow/MytoysRow";
import { AuthContext } from "../../Provider/AuthProvider";
const MyToys = () => {
    useTitle("My Toys")
    const { user } = useContext(AuthContext);
    const [userToys, setUserToys] = useState([]);
    const url = `http://localhost:5000/toys/?email=${user.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setUserToys(data)
            console.log(data)
        })
    }, [url])
    const handleSort = (event) => {
        const sortCategory = parseInt(event.target.value);
        const sortUrl = `http://localhost:5000/toys/?email=${user.email}&sortBy=${sortCategory}`;
        fetch(sortUrl).then(res => res.json()).then(data => {
            setUserToys(data)
            console.log(data)
        })
    };
    return (
        <div className="overflow-x-auto h-[100vh]">
            <table className="table table-zebra w-full text-center">
                <thead>
                    <tr>
                        <th>
                            <div className="input-group">
                                <select onChange={handleSort} className="select select-bordered">
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
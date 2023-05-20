import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle";
import AllToyysSingleRow from "./AllToyysSingleRow";
import Gallery from "../Home/Gallery/Gallery";

const AllToyes = () => {
    useTitle("All Toys");
    const allToysData = useLoaderData();
    const [showAllData, setShowAllData] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState(allToysData);

    const handleShowMore = () => {
        setShowAllData(true);
    };

    const handleShowLess = () => {
        setShowAllData(false);
    };

    const handleSearch = () => {
        const filteredData = allToysData.filter((toy) =>
            toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const handleInputChange = (event) => {
        const inputQuery = event.target.value;
        setSearchQuery(inputQuery);

        if (inputQuery === "") {
            setFilteredData(allToysData);
        }
    };

    return (
        <div className="grid lg:grid-cols-4">
            <div className="overflow-x-auto col-span-3 order-2 lg:order-1 lg:my-20 mx-0 lg:mx-10">
                <table className="table table-zebra w-full text-center">
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Seller Info</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.slice(0, showAllData ? allToysData.length : 20).map((singleToy) => (
                            <AllToyysSingleRow key={singleToy._id} singleToy={singleToy} />
                        ))}
                    </tbody>
                </table>

                <div className="text-center">
                {!showAllData ? (
                    <button className="bg-blue-500 text-white py-2 px-4 mt-4" onClick={handleShowMore}>
                        Show More
                    </button>
                ) : (
                    <button className="bg-blue-500 text-white py-2 px-4 mt-4" onClick={handleShowLess}>
                        Show Less
                    </button>
                )}
            </div>
            </div>

            <div className="col-span-3 lg:col-span-1 my-10 lg:my-20 order-1 lg:order-2">
                <div className="flex items-center justify-center mx-10 lg:mx-0">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="input input-bordered input-accent w-full max-w-xs"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button className="btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                <div className="hidden lg:block">
                    <Gallery />
                </div>
            </div>
        </div>
    );
};

export default AllToyes;



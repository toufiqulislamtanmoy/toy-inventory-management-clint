import { useLoaderData } from "react-router-dom";
import useTitle from "../../CustomHooks/useTitle";
import AllToyysSingleRow from "./AllToyysSingleRow";
const AllToyes = () => {
    useTitle("All Toys");
    const allToysData = useLoaderData();
    console.log(allToysData)
    return (
        <div className="max-w-7xl mx-auto my-20">
            {
                allToysData.map(singleToy => 
                <AllToyysSingleRow key={singleToy._id} singleToy={singleToy}/>
                )
            }
        </div>
    );
};

export default AllToyes;
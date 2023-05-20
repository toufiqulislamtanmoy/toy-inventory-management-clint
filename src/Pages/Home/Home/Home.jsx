import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTitle from "../../../CustomHooks/useTitle";
import FeedBack from "../FeedBack/FeedBack";
import RecomendedForYou from "../../RecomendedForYou/RecomendedForYou";
const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner/>
            <RecomendedForYou/>
            <Gallery>Toys Gallery</Gallery>
            <ShopByCategory/>
            <FeedBack/>
        </div>
    );
};

export default Home;
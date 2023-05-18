import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import useTitle from "../../../CustomHooks/useTitle";
const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;
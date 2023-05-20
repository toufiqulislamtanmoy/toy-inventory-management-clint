import banner from "../../../assets/banner/banner.jpg"
import anime from "../../../assets/banner/anime.json"
import Lottie from "lottie-react"
const Banner = () => {
    return (
        <div className="hero h-[100vh] lg:h-[70vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-2/5">
                            <Lottie animationData={anime}></Lottie>
                        </div>
                        <h1 className="mb-5 w-full text-5xl font-bold">Dream Gone Be True!</h1>
                        <div className="hidden lg:block w-2/5">
                            <Lottie animationData={anime}></Lottie>
                        </div>
                    </div>

                    <p className="mb-5 w-full lg:w-2/5 mx-auto text-xl">`Step into a Magnificent Wonderland of Toys and Embark on an Enchanting Journey, Creating Priceless Memories That Will Last a Lifetime, with Our Spectacular Collection!`</p>
                    <button className="btn btn-outline btn-success">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
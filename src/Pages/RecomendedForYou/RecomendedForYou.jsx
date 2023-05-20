import img1 from "../../assets/justForYou/img1.jpg"
import img2 from "../../assets/justForYou/img2.jpg"
import img3 from "../../assets/justForYou/img3.jpg"
import img4 from "../../assets/justForYou/img4.jpg"
import img5 from "../../assets/justForYou/img5.jpg"
import img6 from "../../assets/justForYou/img6.jpg"
const RecomendedForYou = () => {
    return (

        <div className="my-10 w-1/3 mx-auto">
            <div className="text-center my-10">
                <h2 className="text-5xl font-bold">Just For You</h2>
            </div>
            <div className="carousel w-full h-[400px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full  justify-center  flex items-center pl-7 text-white hero-overlay">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-3xl font-bold'>Anniversary Mega Sale</h2>
                        <p>Limited Time Offer: Get Exclusive Discounts on Your Favorite Items!</p>
                        <div className="space-x-7">
                            <button className="btn btn-outline btn-accent">Check out Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" className="text-sm btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="text-sm btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full  justify-center  flex items-center pl-7 text-white hero-overlay">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-3xl font-bold'>Friday Sell</h2>
                        <p>Discount Alert: Grab the Best Deals Before They're Gone!</p>
                        <div className="space-x-7">
                            <button className="btn btn-outline btn-accent">Check out Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-sm btn btn-circle mr-2">❮</a>
                    <a href="#slide3" className="text-sm btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full  justify-center  flex items-center pl-7 text-white hero-overlay">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-3xl font-bold'>Festive Frenzy</h2>
                        <p>Massive Savings on Every Celebration!</p>
                        <div className="space-x-7">
                            <button className="btn btn-outline btn-accent">Check out Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-sm btn btn-circle mr-2">❮</a>
                    <a href="#slide4" className="text-sm btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full  justify-center  flex items-center pl-7 text-white hero-overlay">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-3xl font-bold'>Friday Offer</h2>
                        <p>Get the Best Deals and Discounts on Top-rated Products!</p>
                        <div className="space-x-7">
                            <button className="btn btn-outline btn-accent">Check out Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="text-sm btn btn-circle mr-2">❮</a>
                    <a href="#slide5" className="text-sm btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute h-full  justify-center  flex items-center pl-7 text-white hero-overlay">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-3xl font-bold'>Mega Holiday Sale</h2>
                        <p>Unlock Massive Savings Today: Shop with Our Discounted Prices!</p>
                        <div className="space-x-7">
                            <button className="btn btn-outline btn-accent">Check out Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="text-sm btn btn-circle mr-2">❮</a>
                    <a href="#slide6" className="text-sm btn btn-circle ml-5">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute h-full  justify-center  flex items-center pl-7 text-white hero-overlay">
                    <div className='space-y-7 w-[50%]'>
                        <h2 className='text-3xl font-bold'>Grand Festivity</h2>
                        <p>Hurry! Don't Miss Out on Our Incredible Discounts and Offers!</p>
                        <div className="space-x-7">
                            <button className="btn btn-outline btn-accent">Check out Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="text-sm btn btn-circle mr-2">❮</a>
                    <a href="#slide1" className="text-sm btn btn-circle ml-5">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RecomendedForYou;
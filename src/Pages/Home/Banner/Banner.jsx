import banner from "../../../assets/banner/banner.jpg"
const Banner = () => {
    return (
        <div className="w-full h-[600px] ">
        <div className=" relative w-full">
            <img  src={banner} className="w-full h-[600px]" />
            <div className="absolute h-full left-0  top-0 flex items-center pl-7 text-white bg-gradient-to-r from-[#151515] to-[#504f4f00]">
                <div className='space-y-7 w-[60%]'>
                    <h2 className='text-5xl font-bold'>Your Ultimate Toy Destination!</h2>
                    <p>Experience Wonder at TOY-MONSTER! Enjoy 15% off all products from May 20th to June 20th! </p>
                    <div className="space-x-7">
                        <button className="btn btn-outline btn-accent">10% Off - Shop Now!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;
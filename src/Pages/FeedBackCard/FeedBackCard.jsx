import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeedBackCard = ({ singleFeedback }) => {
    AOS.init();
    const { name, dateTime, photoUrl, rating,feedback } = singleFeedback;
    return (

        <div className="shadow-lg m-10 w-4/5 mx-auto" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
            <div className="flex gap-3 p-5">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={photoUrl} />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mt-3">{name}</h2>
                    <p>{dateTime}</p>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                        readonly
                    />
                </div>
            </div>
            <div className="my-5 p-5 ">
                <p>{feedback}</p>
            </div>
        </div>

    );
};

export default FeedBackCard;
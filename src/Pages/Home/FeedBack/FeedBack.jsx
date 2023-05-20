import { useEffect, useState } from "react";
import FeedBackCard from "../../FeedBackCard/FeedBackCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeedBack = () => {
    AOS.init();
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        fetch('https://toy-monster-server.vercel.app/feedback')
            .then(res => res.json())
            .then(feedbacks => {
                console.log(feedbacks);
                setFeedback(feedbacks);
            });
    }, []);

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-5xl font-bold" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Happy User</h2>
            </div>

            {feedback.map(singleFeedback => (
               <FeedBackCard key={singleFeedback._id} singleFeedback={singleFeedback}/>
            ))}
        </div>
    );
};

export default FeedBack;

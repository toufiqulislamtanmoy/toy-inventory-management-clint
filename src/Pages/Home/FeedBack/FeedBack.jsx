import { useEffect, useState } from "react";

const FeedBack = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feedback').then(res => res.json()).then(feedbacks => {
            console.log(feedbacks)
            setFeedback(feedbacks)
        }
        )
    }, [])
    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-5xl font-bold">Happy User</h2>
                <p>Total Feedback: {feedback.length}</p>
            </div>
        </div>
    );
};

export default FeedBack;
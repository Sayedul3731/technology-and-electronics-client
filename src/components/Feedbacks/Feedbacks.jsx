// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";



const Feedbacks = () => {

    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        fetch('https://technology-and-electronics-server-fd923tlg8-ate-yours-projects.vercel.app/feedback')
            .then(res => res.json())
            .then(data => {
              setFeedbacks(data)
            })
    }, [feedbacks])

 
    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-center mb-10">Client Feedback</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5">
            {
                
                feedbacks.map(feedback => <Feedback key={feedback._id} feedback={feedback}></Feedback>)
            }
            </div>
        </div>
    );
};

export default Feedbacks;
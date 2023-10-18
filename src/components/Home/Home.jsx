import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand"
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";
// import Feedbacks from "../Feedbacks/Feedbacks";


const Home = () => {

    const brands = useLoaderData()
    const [feedbacks, setFeedbacks] = useState("")
    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then(res => res.json())
            .then(data => {
              setFeedbacks(data);
            })
    }, [])
   
    return (
        <div>
            <Banner></Banner>
            <div className="my-16">
                <h1 className="text-5xl font-semibold text-center">All Brand</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                    {
                        brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                    }
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-semibold text-center">Client Feedback</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
               {
                    
                    feedbacks.map(feedback => <Feedback key={feedback._id} feedback={feedback}></Feedback>)
                }
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
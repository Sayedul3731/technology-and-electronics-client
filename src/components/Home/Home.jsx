import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand"
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Feedbacks from "../Feedbacks/Feedbacks";
import Members from "../Members/Members";


const Home = () => {

    const brands = useLoaderData()
  

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
            <Feedbacks></Feedbacks>
            <Members></Members>
            <Footer></Footer>
        </div>
    );
};

export default Home;
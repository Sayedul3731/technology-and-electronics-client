import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react"
import SpecificProduct from "../SpecificProduct/SpecificProduct";


const BrandDetails = () => {
    const brand = useLoaderData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const specificBrandProducts = products.filter(product => product.brand === brand.name)




    return (
        <div className="w-full ">
            <div className="carousel w-1/2 ml-[320px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/bkash.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/nagad.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/oppo.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/vivo.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 relative">
                {
                    specificBrandProducts.length > 0 ? specificBrandProducts.map(specificProduct => <SpecificProduct key={specificProduct._id} specificProduct={specificProduct}></SpecificProduct>) : <div className="flex absolute  h-max-screen justify-center items-center md:ml-44 lg:ml-96"><p className="font-medium text-center text-red-400">Currently no product of this brand has been launched!!! <br /> but will be launched very soon...</p></div>
                }
            </div>
        </div>
    );
};

export default BrandDetails;
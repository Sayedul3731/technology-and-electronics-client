import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react"
import SpecificProduct from "../SpecificProduct/SpecificProduct";


const BrandDetails = () => {
    const brand = useLoaderData()
    console.log(brand);
    const [products, setProducts] = useState([])
  


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const specificBrandProducts = products.filter(product => product.brand === brand.name)
    console.log(specificBrandProducts);
   
    

    return (
        <div className="w-full ">
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 relative">
                {
                   specificBrandProducts.length > 0 ? specificBrandProducts.map(specificProduct => <SpecificProduct key={specificProduct._id} specificProduct={specificProduct}></SpecificProduct>) : <div className="flex absolute  h-max-screen justify-center items-center md:ml-44 lg:ml-96"><p className="font-medium text-center text-red-400">Currently no product of this brand has been launched!!! <br /> but will be launched very soon...</p></div>
                }
            </div>
        </div>
    );
};

export default BrandDetails;
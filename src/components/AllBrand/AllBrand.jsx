import { useLoaderData } from "react-router-dom"
import Brand from "./Brand";

const AllBrand = () => {

    const allBrand = useLoaderData()

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center my-10">All Brand</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    allBrand.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default AllBrand;
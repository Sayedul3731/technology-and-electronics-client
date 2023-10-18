// import { useEffect, useState } from "react";
// import Brand from "./Brand";

// const AllBrand = () => {

 

//     const [brands, setBrands] = useState("")
    

//     useEffect( () => {
//         fetch('http://localhost:5000/brand')
//         .then(res => res.json())
//         .then(data => setBrands(data))
//     },[brands])
//     console.log(brands);
    
//     return (
//         <div className="mb-10">
//             <h1 className="text-4xl font-semibold text-center my-10">All Brand</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//                 {
//                     brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
//                 }
//             </div>
       
//         </div>
//     );
// };

// export default AllBrand;
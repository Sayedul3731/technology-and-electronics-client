import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateProduct = () => {

    const product = useLoaderData()
    console.log(product);

    const { _id, name, brand, type, price, rating, photo } = product;
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const updatedProduct = {name, brand, type, price, rating, photo};
        console.log(updatedProduct);
        fetch(`https://technology-and-electronics-server-jd32vo1zk-ate-yours-projects.vercel.app/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0 ) {
                    Swal.fire(
                        'Success!',
                        'Product Updated Successfully.',
                        'success'
                    )
                }
            })
      
    }
    return (
        <div className="bg-sky-50 p-24">
            <h1 className="text-4xl font-semibold text-center mb-10">Update Product</h1>

            <form onSubmit={handleUpdateProduct}>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" defaultValue={type} placeholder="Phone/Computer/Headphone" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="photoURL" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-sky-400 text-white mt-10" type="submit" value="submit" />

            </form>
        </div>
    );
};

export default UpdateProduct;
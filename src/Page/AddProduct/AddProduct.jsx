import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newProduct = {name, brand, type, price, description, rating, photo};
        console.log(newProduct);
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'Client Feedback added Successfully.',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="bg-sky-50 p-24">
        <h1 className="text-4xl font-semibold text-center mb-10">Add Product</h1>

        <form onSubmit={handleAddProduct}>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Product Name" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered md:w-full" />
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
                        <input type="text" name="type" placeholder="Phone/Computer/Headphone" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Description" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered md:w-full" />
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
                        <input type="text" name="photo" placeholder="photoURL" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>

            <input className="btn btn-block bg-sky-400 text-white mt-10" type="submit" value="Add Product" />
             
        </form>
    </div>
    );
};

export default AddProduct;
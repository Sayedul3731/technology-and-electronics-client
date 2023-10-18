

const AddBrand = () => {

    const handleAddBrand = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const newBrand = {name, photo}
        console.log(newBrand);

        fetch('http://localhost:5000/brand', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
   
    }
    return (
        <div className="bg-sky-50 p-24">
            <h1 className="text-4xl font-semibold text-center">Add Brand</h1>

            <form onSubmit={handleAddBrand}>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Brand Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Brand Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photoURL" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                <input className="btn btn-block bg-sky-400 text-white mt-10" type="submit" value="Add Brand" />
                 
            </form>
        </div>
    );
};

export default AddBrand;
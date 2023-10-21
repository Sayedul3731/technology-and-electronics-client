import Swal from 'sweetalert2'

const AddFeedback = () => {

    const handleAddFeedback = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const company = form.company.value;
        const position = form.position.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newFeedback = { name, company, position, rating, description, photo }
        console.log(newFeedback);
        fetch('https://technology-and-electronics-server-jd32vo1zk-ate-yours-projects.vercel.app/feedback', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newFeedback)
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
        <h1 className="text-4xl font-semibold text-center mb-10">Add Feedback</h1>

        <form onSubmit={handleAddFeedback}>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Client Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Client Name" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="company" placeholder="Company Name" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Position</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="position" placeholder="Position" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
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
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Description" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="photoURL" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>

            <input className="btn btn-block bg-sky-400 text-white mt-10" type="submit" value="Add Feedback" />
             
        </form>
    </div>
    );
};

export default AddFeedback;
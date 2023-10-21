import Swal from "sweetalert2";


const AddMember = () => {
    const handleAddMember = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const title = form.title.value;
        const newMember = {name, photo, title}
        console.log(newMember);

        fetch('https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/member', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newMember)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Success!',
                    'New Member added Successfully.',
                    'success'
                  )
            }
        })
    }
    return (
        <div className="bg-sky-50 p-24">
        <h1 className="text-4xl font-semibold text-center">Add Team Member</h1>

        <form onSubmit={handleAddMember}>
            {/* form row  */}
            <div className="md:flex gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-5">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="Title Name" className="input input-bordered md:w-full" />
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

            <input className="btn btn-block bg-sky-400 text-white mt-10" type="submit" value="Add Member" />
             
        </form>
    </div>
    );
};

export default AddMember;
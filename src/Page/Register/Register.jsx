import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';


const Register = () => {

    const { userCreate } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{6,}$/.test(password)
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please should be at least 6 character, a capital letter and a special character.',
            })
        } else {
            userCreate(email, password)
                .then(result => {
                    console.log(result.user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Congratulations!',
                        text: "User Created Successfully.",
                    })
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo
                    })
                })
                .catch(error => {
                    console.error(error);
                })
        }


    }
    return (
        <div className="hero min-h-screen bg-sky-50">
            <div className="hero-content flex-col">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photoURL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={(e) => setShow(e.target.value)} type={show ? 'password' : 'text'} name="password" placeholder="password" className="input input-bordered" required />
                            <span className="absolute ml-[250px] mt-[52px] cursor-pointer" onClick={() => setShow(!show)}>{show ? <BsFillEyeFill></BsFillEyeFill>  : <BsFillEyeSlashFill></BsFillEyeSlashFill> }</span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="w-full bg-sky-400 py-2 font-semibold text-xl text-white">Register</button>
                        </div>
                        <p>Already have an account? Please <Link to="/login"><span className="text-sky-400 font-semibold">Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
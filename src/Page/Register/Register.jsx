import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-sky-50">
        <div className="hero-content flex-col">
            <div className="text-center mb-5">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="w-full bg-sky-400 py-2 font-semibold text-xl text-white">Register</button>
                    </div>
                    <p>Already have an account? Please <Link to="/register"><span className="text-sky-400 font-semibold">Login</span></Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
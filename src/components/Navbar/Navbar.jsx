import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
    </>

    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <img className="w-[40px] h-[40px] hidden lg:flex" src="logo.jpg" alt="" />
                    <a className=" normal-case text-xl">TechWizPro</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="border navbar-end w-1/2 ml-2">
                {
                    user ? <div  className="flex justify-center items-center "><span className="text-sm font-semibold md:mr-1">{user.displayName}</span> <span><img className="w-[50px] h-[50px] rounded-full" src={user.photoURL} alt="" /></span></div> : ''
                }
            </div>
            <div className="navbar-end">
                <NavLink to="/login"><button className="px-4 py-2 rounded-sm font-semibold bg-sky-400 text-white">{user ? 'Log Out' : 'Log in'}</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;
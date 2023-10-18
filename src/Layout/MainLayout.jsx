import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1250px] mx-auto my-2 font-openSans">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
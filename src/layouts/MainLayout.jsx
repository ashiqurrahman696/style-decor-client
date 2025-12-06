import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
        </div>
    );
};

export default MainLayout;
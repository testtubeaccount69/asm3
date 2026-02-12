import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import PopupPage from "../components/PopupPage";

function Layout() {
    return (
        <>
            <Navbar />


            <Outlet />

            <Footer />
            <PopupPage />
        </>
    );
}

export default Layout;

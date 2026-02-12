import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; import { Outlet } from "react-router-dom";
import ProductPopup from "../components/ProductPopup";
import LiveChatWidget from "../components/LiveChatWidget";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ProductPopup />
            <LiveChatWidget />
        </>
    );
}

export default Layout;

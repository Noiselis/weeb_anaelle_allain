import { useCallback, useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/commonComponents/NavBar";
import Footer from "./components/commonComponents/Footer";

export default function Layout() {
    /* const [isDeviceMobile, setIsDeviceMobile] = useState("true"); */
    const [isDeviceMobile, setIsDeviceMobile] = useState(null);

    useEffect(() => {
        setIsDeviceMobile(window.matchMedia("(width < 480px)").matches);
    }, []);

    return (
        <div className="bg-primary flex flex-col">
            <NavBar isDeviceMobile={isDeviceMobile} />
            <Outlet />
            <Footer />
        </div>
    );
}

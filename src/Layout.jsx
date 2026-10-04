import { useCallback, useReducer, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/commonComponents/NavBar";
import Footer from "./components/commonComponents/Footer";
import AddArticle from "./pages/AddArticle";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import TemplateArticle from "./pages/Article";

export default function Layout() {
    /* const [isDeviceMobile, setIsDeviceMobile] = useState("true"); */
    const [isDeviceMobile, setIsDeviceMobile] = useState(null);

    return (
        <div>
            <NavBar isDeviceMobile={isDeviceMobile} />
            <Outlet />
            <Footer />
        </div>
    );
}

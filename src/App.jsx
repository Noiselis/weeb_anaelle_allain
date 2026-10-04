import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import AddArticle from "./pages/AddArticle";
import Article from "./pages/Article";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "addarticle",
                element: <AddArticle />,
            },
            {
                path: "/Article/:id",
                element: <Article />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signin",
                element: <SignIn />,
            },
        ],
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;

import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddBrand from "../components/AddBrand/AddBrand";
import AllBrand from "../components/AllBrand/AllBrand";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addBrand",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/allBrand",
                element: <AllBrand></AllBrand>,
                loader: () => fetch('http://localhost:5000/brand')
            }
        ]
    }
])

export default router;
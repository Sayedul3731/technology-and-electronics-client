import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddBrand from "../components/AddBrand/AddBrand";
import AddFeedback from "../components/AddFeedback/AddFeedback";
// import Feedbacks from "../components/Feedbacks/Feedbacks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brand')
            },
            {
                path: "/addBrand",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/addFeedback",
                element: <AddFeedback></AddFeedback>
            }
        ]
    }
])

export default router;
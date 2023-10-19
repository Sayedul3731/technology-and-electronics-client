import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddBrand from "../components/AddBrand/AddBrand";
import AddFeedback from "../components/AddFeedback/AddFeedback";
import AddMember from "../components/AddMember/AddMember";
import Members from "../components/Members/Members";
import Feedbacks from "../components/Feedbacks/Feedbacks";
import AddProduct from "../Page/AddProduct/AddProduct";
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
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/addBrand",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/addFeedback",
                element: <AddFeedback></AddFeedback>
            },
            {
                path: "/addMember",
                element: <AddMember></AddMember>
            },
            {
                path: "/member",
                element: <Members></Members>,
                loader: () => fetch('ttp://localhost:5000/member')
            },
            {
                path: "/feedback",
                element: <Feedbacks></Feedbacks>,
                loader: () => fetch('http://localhost:5000/feedbackf')
            }
        ]
    }
])

export default router;
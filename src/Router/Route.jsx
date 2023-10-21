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
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import PrivetRoute from "./PrivetRoute";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import MyCart from "../Page/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/brand')
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addProduct",
                element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
            },
            {
                path: "/myCart",
                element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
                loader: () => fetch('https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/cart')
            },
            {
                path: "/addBrand",
                element: <AddBrand></AddBrand>
            },
            {
                path: "/brand/:id",
                element: <BrandDetails></BrandDetails>,
                loader: ({params}) => fetch(`https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/brand/${params.id}`)
            },
            {
                path: "/product/:id",
                element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
                loader: ({params}) => fetch(`https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/product/${params.id}`)
            },
            {
                path: "/updateProduct",
                element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>
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
                loader: () => fetch('https://technology-and-electronics-server-ctbe8l6px-ate-yours-projects.vercel.app/feedbackf')
            }
        ]
    }
])

export default router;
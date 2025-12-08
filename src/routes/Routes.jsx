import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ManageDecorators from "../pages/AdminDashboard/ManageDecorators";
import AdminRoute from "./AdminRoute";
import ManageServices from "../pages/AdminDashboard/ManageServices";
import AddService from "../pages/AdminDashboard/AddService";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import BookingForm from "../pages/BookingForm/BookingForm";
import ManageBookings from "../pages/AdminDashboard/ManageBookings";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/service/:id",
                Component: ServiceDetail,
                loader: ({params}) => fetch(`${import.meta.env.VITE_baseURL}/service/${params.id}`)
            },
            {
                path: "/book-service/:id",
                Component: BookingForm,
                loader: ({params}) => fetch(`${import.meta.env.VITE_baseURL}/service/${params.id}`)
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashboardLayout/>
        </PrivateRoute>,
        children: [
            {
                path: "/dashboard/manage-decorators",
                element: <AdminRoute>
                    <ManageDecorators/>
                </AdminRoute>
            },
            {
                path: "/dashboard/manage-services",
                element: <AdminRoute>
                    <ManageServices/>
                </AdminRoute>
            },
            {
                path: "/dashboard/add-service",
                element: <AdminRoute>
                    <AddService/>
                </AdminRoute>
            },
            {
                path: "/dashboard/manage-bookings",
                element: <AdminRoute>
                    <ManageBookings/>
                </AdminRoute>
            },
        ]
    }
]);
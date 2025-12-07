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
        ]
    }
]);
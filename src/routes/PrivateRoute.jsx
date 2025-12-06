import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars w-12"></span>
        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;
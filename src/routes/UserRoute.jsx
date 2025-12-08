import { Navigate } from 'react-router';
import useRole from '../hooks/useRole';

const UserRoute = ({ children }) => {
    const [role, isRoleLoading] = useRole();

    if (isRoleLoading) return <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-bars w-12"></span>
    </div>;
    if (role === 'user') return children;
    return <Navigate to='/' replace='true' />;
}

export default UserRoute;

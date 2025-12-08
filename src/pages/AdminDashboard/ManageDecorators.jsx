import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageDecorators = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const result = await axiosSecure(`/users`);
            return result.data;
        }
    });

    const handleMakeDecorator = id => {
        const updatedRole = {
            role: "decorator"
        };
        axiosSecure.patch(`/user/${id}/role`, updatedRole)
            .then(res => {
                if(res.data.modifiedCount){
                    refetch();
                    toast.success("Role updated");
                }
            });
    }

    if (isLoading) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars w-12"></span>
        </div>;
    }
    return (
        <div className="space-y-4">
            <h2 className="text-4xl font-bold">Manage Decorators</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.displayName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>{user.role}</td>
                            <th>
                                {user.role === "decorator" || <button onClick={() => handleMakeDecorator(user._id)} className="btn btn-primary text-black">Make Decorator</button>}
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDecorators;
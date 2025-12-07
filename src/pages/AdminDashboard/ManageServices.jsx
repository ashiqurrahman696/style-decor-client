import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageServices = () => {
    const axiosSecure = useAxiosSecure();
    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const result = await axiosSecure(`/services`);
            return result.data;
        }
    });

    if (isLoading) {
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-bars w-12"></span>
        </div>;
    }
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">Manage Decoration Services</h2>
                <Link to="/dashboard/add-service" className="btn btn-primary text-white"><FaPlus />Add Service</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Service Name</th>
                            <th>Cost</th>
                            <th>Unit</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => <tr key={service._id}>
                            <th>{index + 1}</th>
                            <td>{service.service_name}</td>
                            <td>Tk {service.cost}</td>
                            <td>{service.unit}</td>
                            <td>{service.service_category}</td>
                            <td>
                                <div className="flex gap-2">
                                    <button className="btn btn-primary text-white">Edit</button>
                                    <button className="btn btn-secondary text-white">Delete</button>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AssignedServices = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: services = [], refetch} = useQuery({
        queryKey: ['services', user.email],
        queryFn: async() => {
            const res = await axiosSecure(`/services/decorators?decoratorEmail=${user.email}`);
            return res.data;
        }
    });
    return (
        <div className="space-y-4">
            <h2 className="text-4xl font-bold">Assigned Services</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Service Name</th>
                            <th>Cost</th>
                            <th>Unit</th>
                            <th>Booking Date</th>
                            <th>Service Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => <tr key={service._id}>
                            <th>{index + 1}</th>
                            <td>{service.name}</td>
                            <td>{service.email}</td>
                            <td>{service.location}</td>
                            <td>{service.service_name}</td>
                            <td>{service.cost}</td>
                            <td>{service.unit}</td>
                            <td>{new Date(service.booking_date).toLocaleDateString()}</td>
                            <td>{service.service_status}</td>
                            <td>
                                <button>Button</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignedServices;
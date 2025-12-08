import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const result = await axiosSecure(`/bookings`);
            return result.data;
        }
    });
    return (
        <div className="space-y-4">
            <h2 className="text-4xl font-bold">Manage Bookings</h2>
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
                            <th>Booking Date</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.location}</td>
                            <td>{booking.service_name}</td>
                            <td>{booking.cost}</td>
                            <td>{new Date(booking.created_at).toLocaleString()}</td>
                            <td>{booking.payment_status}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBookings;
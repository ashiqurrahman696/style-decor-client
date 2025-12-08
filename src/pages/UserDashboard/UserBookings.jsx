import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UserBookings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: userBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['userBookings', user?.email],
        queryFn: async () => {
            const result = await axiosSecure(`/user-bookings`);
            return result.data;
        }
    });
    return (
        <div className="space-y-4">
            <h2 className="text-4xl font-bold">My Bookings</h2>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userBookings.map((booking, index) => <tr key={booking._id}>
                            <th>{index + 1}</th>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.location}</td>
                            <td>{booking.service_name}</td>
                            <td>{booking.cost}</td>
                            <td>{new Date(booking.created_at).toLocaleString()}</td>
                            <td>{booking.payment_status}</td>
                            <td>{booking.payment_status === "unpaid" && <button className="btn btn-primary text-black">Pay</button>}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserBookings;
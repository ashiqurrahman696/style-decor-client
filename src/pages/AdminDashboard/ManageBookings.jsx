import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const ManageBookings = () => {
    const axiosSecure = useAxiosSecure();
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 10;
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', currentPage],
        queryFn: async () => {
            const result = await axiosSecure(`/bookings?limit=${limit}&skip=${currentPage * limit}`);
            const page = Math.ceil(result.data.total / limit);
            setTotalPage(page);
            return result.data.result;
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
                            <th>Action</th>
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
                            <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
                            <td>{booking.payment_status}</td>
                            <td>{booking.payment_status === "paid" && <button className="btn btn-primary text-black">Find Decorators</button>}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center flex-wrap gap-3 py-10">
                {
                    currentPage > 0 &&
                    <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-primary text-black">&lt; Prev</button>

                }
                {
                    [...Array(totalPage).keys()].map((i) =>
                        <button onClick={() => setCurrentPage(i)} className={`btn ${i === currentPage && "btn-primary text-black"}`}>{i}</button>
                    )
                }
                {
                    currentPage < totalPage - 1 &&
                    <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-primary text-black">Next &gt;</button>
                }
            </div>
        </div>
    );
};

export default ManageBookings;
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";

const BookingForm = () => {
    const {user} = useAuth();
    const service = useLoaderData();
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <div className="card bg-base-200 border border-neutral-300">
                <div className="card-body">
                    <h2 className="text-4xl font-semibold text-center mb-4">Book your service</h2>
                    <form className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Your Name</label>
                            <input type="text" defaultValue={user.displayName} className="input w-full" placeholder="YOur Name" />
                        </div>
                        <div>
                            <label className="label">Your Email</label>
                            <input type="text" defaultValue={user.email} className="input w-full" placeholder="Your Email" />
                        </div>
                        <div>
                            <label className="label">Service Name</label>
                            <input type="text" defaultValue={service.service_name} className="input w-full" placeholder="Service Name" />
                        </div>
                        <div>
                            <label className="label">Cost</label>
                            <input type="text" defaultValue={service.cost} className="input w-full" placeholder="Cost" />
                        </div>
                        <div>
                            <label className="label">Unit</label>
                            <input type="text" defaultValue={service.unit} className="input w-full" placeholder="Unit" />
                        </div>
                        <div>
                            <label className="label">Booking Date</label>
                            <input type="date" className="input w-full" />
                        </div>
                        <div>
                            <label className="label">Your Location</label>
                            <input type="text" className="input w-full" placeholder="Your Location" />
                        </div>
                        <div className="col-span-full">
                            <button className="btn btn-primary text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
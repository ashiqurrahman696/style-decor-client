import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const ManageServices = () => {
    const [selectedService, setSelectedService] = useState(null);
    const axiosSecure = useAxiosSecure();
    const updateModalRef = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: services = [], isLoading, refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const result = await axiosSecure(`/services`);
            return result.data;
        }
    });

    const openUpdateService = service => {
        setSelectedService(service);
        updateModalRef.current.showModal();
    }

    const handleUpdateService = data => {
        console.log(data);
    }

    const handleDeleteService = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/services/${id}`)
                    .then(res => {
                        if(res.data.deletedCount){
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Service has been deleted.",
                                icon: "success"
                            });
                        }
                    });
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
                                    <button onClick={() => openUpdateService(service)} className="btn btn-primary text-white">Edit</button>
                                    <button onClick={() => handleDeleteService(service._id)} className="btn btn-secondary text-white">Delete</button>
                                </div>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <dialog ref={updateModalRef} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {/* content */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">Update Decoration Service</h2>
                        <form onSubmit={handleSubmit(handleUpdateService)} className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Service Name</label>
                                <input type="text" {...register("service_name", {
                                    required: true,
                                })} defaultValue={selectedService?.service_name} className="input w-full" placeholder="Service Name" />
                                {
                                    errors.service_name?.type === "required" &&
                                    <p className="text-red-500">Service name is required</p>
                                }
                            </div>
                            <div>
                                <label className="label">Cost (BDT)</label>
                                <input type="text" {...register("cost", {
                                    required: true,
                                })} defaultValue={selectedService?.cost} className="input w-full" placeholder="Cost (BDT)" />
                                {
                                    errors.cost?.type === "required" &&
                                    <p className="text-red-500">Cost is required</p>
                                }
                            </div>
                            <div>
                                <label className="label">Unit</label>
                                <select {...register("unit", {
                                    required: true,
                                })} defaultValue={selectedService?.unit} className="select w-full" placeholder="Unit">
                                    <option value="" disabled selected>Select Unit</option>
                                    <option value="per sqr-ft">per sqr-ft</option>
                                    <option value="per floor">per floor</option>
                                    <option value="per meter">per meter</option>
                                    <option value="per event">per event</option>
                                    <option value="per session">per session</option>
                                </select>
                                {
                                    errors.unit?.type === "required" &&
                                    <p className="text-red-500">Unit is required</p>
                                }
                            </div>
                            <div>
                                <label className="label">Service Category</label>
                                <select type="text" className="select w-full" placeholder="Service Category">
                                    <option value="" disabled selected>Select Category</option>
                                    <option value="home">home</option>
                                    <option value="wedding">wedding</option>
                                    <option value="office">office</option>
                                    <option value="seminar">seminar</option>
                                    <option value="meeting">meeting</option>
                                </select>
                                {
                                    errors.service_category?.type === "required" &&
                                    <p className="text-red-500">Service category is required</p>
                                }
                            </div>
                            <div>
                                <label className="label">Description</label>
                                <textarea {...register("description", {
                                    required: true,
                                })} defaultValue={selectedService?.description} className="textarea w-full resize-none" rows={5} placeholder="Description" />
                                {
                                    errors.description?.type === "required" &&
                                    <p className="text-red-500">Description is required</p>
                                }
                            </div>
                            <div className="col-span-full">
                                <button className="btn btn-primary text-white">Update</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ManageServices;
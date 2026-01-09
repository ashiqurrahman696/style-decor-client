import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import ServiceCard from "../../components/Home/ServiceCard";

const AllServices = () => {
    const [searchText, setSearchText] = useState("");
    const axios = useAxios();
    const { data: serviceData = [], isLoading } = useQuery({
        queryKey: ['serviceData', searchText],
        queryFn: async () => {
            const result = await axios(`/services?searchText=${searchText}`);
            return result.data;
        }
    });
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <h2 className="text-center text-4xl font-semibold">All Decoration Services</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {serviceData.map(service =>
                    <ServiceCard key={service._id} service={service} />
                )}
            </div>
        </div>
    );
};

export default AllServices;
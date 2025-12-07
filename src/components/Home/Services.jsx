import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const axios = useAxios();
    const { data: serviceData = [], isLoading } = useQuery({
        queryKey: ['serviceData'],
        queryFn: async () => {
            const result = await axios(`/services`);
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
            <h2 className="text-center text-4xl font-semibold">All Decoration Services</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {serviceData.map(service =>
                    <ServiceCard key={service._id} service={service} />
                )}
            </div>
        </div>
    );
};

export default Services;
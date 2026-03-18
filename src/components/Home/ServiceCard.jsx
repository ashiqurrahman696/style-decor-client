import { Link } from "react-router";

const ServiceCard = ({service}) => {
    return (
        <div className="card bg-base-200 border border-neutral-300 overflow-hidden">
            <figure>
                <img
                    src={service.packageImgURL}
                    alt={service.service_name}
                    className="w-full h-40 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service.service_name}</h2>
                <p><strong>Category:</strong> <span className="capitalize">{service.service_category}</span></p>
                <p>Tk. {service.cost} {service.unit}</p>
                <p>{service.description}</p>
                <div className="card-actions">
                    <Link to={`/service/${service._id}`} className="btn btn-primary text-black">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
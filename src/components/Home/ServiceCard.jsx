const ServiceCard = ({service}) => {
    return (
        <div className="card bg-base-200 border border-neutral-300">
            <div className="card-body">
                <h2 className="card-title">{service.service_name}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({review}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <FaQuoteRight className="text-4xl opacity-30"/>
                <p>{review.review}</p>
                <hr className="text-gray-300" />
                <div className="flex items-center gap-2">
                    <img src={review.user_photoURL} className="rounded-full w-16" />
                    <div>
                        <h5 className="font-semibold text-lg">{review.userName}</h5>
                        <p className="opacity-50">Product Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
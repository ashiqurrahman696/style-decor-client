import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
    return (
        <div className="space-y-4 min-h-screen flex flex-col justify-center items-center text-center">
            <FaCheckCircle size={100} className="text-green-600" />
            <h2 className="text-4xl font-bold">Payment Successful</h2>
            <p>Thank you for your purchase. Your order is being processed.</p>
        </div>
    );
};

export default PaymentSuccess;
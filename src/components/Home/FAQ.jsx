import axios from "axios";
import { useEffect, useState } from "react";

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        axios('faq.json')
            .then(res => {
                setFaqs(res.data);
            });
    }, [faqs]);
    return (
        <div className="space-y-4">
            <h2 className="text-center font-bold text-4xl">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {faqs.map(faq => <div key={faq.id} className="collapse collapse-arrow border border-neutral-300 bg-base-200">
                    <input type="radio" name="accordion" defaultChecked />
                    <div className="collapse-title font-semibold">{faq.question}</div>
                    <div className="collapse-content text-sm">{faq.answer}</div>
                </div>)}
            </div>
        </div>
    );
};

export default FAQ;
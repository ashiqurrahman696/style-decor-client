import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from "./ReviewCard";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios('reviews.json')
            .then(res => {
                setReviews(res.data);
            });
    }, [reviews]);
    return (
        <div className="space-y-4">
            <h2 className="text-center font-bold text-4xl">What our customers are saying</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: '50%',
                    depth: 100,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
    const slides = [
        {
            id: 1,
            bgImage: "https://i.ibb.co/WvzGNW34/round-rug.jpg",
            title: "Bring the Canvas of Nature Indoors",
            description: "Where Beauty Is Intentional And Every Decor Piece Tells A Story",
            buttonText: "Book Decoration Service",
        },
        {
            id: 2,
            bgImage: "https://i.ibb.co.com/TBtH2T5j/contemporary-interior-design-ideas-for-your-home.jpg",
            title: "Transform Your Space with Elegance",
            description: "Discover Decor That Inspires and Delights",
            buttonText: "Explore Our Services",
        },
        {
            id: 3,
            bgImage: "https://i.ibb.co.com/Rk4XXM07/wedding-stage-decorations.jpg",
            title: "Crafted for Timeless Appeal",
            description: "Every Piece Handpicked for Perfection",
            buttonText: "Get Started Today",
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="relative min-h-[500px]">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="bg-cover bg-center bg-no-repeat min-h-[500px]"
                            style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4 text-white space-y-4"
                            >
                                <motion.h2 variants={item} className="text-5xl font-semibold">
                                    {slide.title}
                                </motion.h2>
                                <motion.p variants={item}>{slide.description}</motion.p>
                                <motion.div variants={item}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn btn-primary text-black"
                                    >
                                        {slide.buttonText}
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
import About from "../../components/Home/About";
import Coverage from "../../components/Home/Coverage";
import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";
import TopDecorators from "../../components/Home/TopDecorators";
import Newsletter from "../../components/Home/Newsletter";
import Contact from "../../components/Home/Contact";
import Reviews from "../../components/Home/Reviews";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-12">
            <Hero/>
            <Services/>
            <TopDecorators/>
            <Reviews />
            <Coverage/>
            <Newsletter/>
            <Contact/>
        </div>
    );
};

export default Home;
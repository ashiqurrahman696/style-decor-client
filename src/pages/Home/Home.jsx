import Coverage from "../../components/Home/Coverage";
import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-4">
            <Hero/>
            <Services/>
            <Coverage/>
        </div>
    );
};

export default Home;
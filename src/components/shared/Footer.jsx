import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer md:grid-cols-3 bg-base-200 text-base-content p-10">
            <aside>
                <img src={logo} alt="StyleDecor Logo" className="w-24" />
                <h2 className="text-3xl font-bold">
                    Style Decor Ltd.
                </h2>
                <p>
                    Your trusted partner for all your interior design needs.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/about" className="link link-hover">About</Link>
                <Link to="/all-services" className="link link-hover">All Services</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://facebook.com/StyleDecor" target="_blank">
                        <FaFacebookF size={24} />
                    </a>
                    <a href="https://x.com/StyleDecor" target="_blank">
                        <FaXTwitter size={24} />
                    </a>
                    <a href="https://instagram.com/StyleDecor" target="_blank">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://youtube.com/@StyleDecor" target="_blank">
                        <FaYoutube size={24} />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
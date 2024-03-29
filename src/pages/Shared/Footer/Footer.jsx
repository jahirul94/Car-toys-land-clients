import { FaCopyright, FaFacebook, FaInbox, FaInstagram, FaLocationArrow, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div className="lg:ps-20">
                <img className="w-28 h-14 rounded" src="https://i.ibb.co/80TkdYy/384496107-1006146903984604-8073565797502982080-n.png" alt="" />
                <h2 className="text-lg font-bold">Car Toys Land</h2>
                <p className="flex items-center"><FaLocationArrow className="me-2"></FaLocationArrow> California , United States</p>
                 <p className="flex items-center"><FaInbox className="me-2"></FaInbox> Email : cartoys@land.com</p>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/'>About us</Link>
                <Link to='/'>Contact</Link>
                <Link to='/'>Jobs</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="flex items-center" to="/"><FaCopyright className="me-2"></FaCopyright> Copy Right Policy</Link>
                <Link to="/">Terms of use</Link>
                <Link to="/">Privacy policy</Link>
            </div>
            <div>
                <span className="footer-title">Join With Us </span>
                <div className="flex space-x-4">
                    <a href="/"><FaFacebook className="text-2xl"></FaFacebook></a>
                    <a href="/"><FaTwitter className="text-2xl"></FaTwitter></a>
                    <a href="/"><FaInstagram className="text-2xl"></FaInstagram></a>
                    <a href="/"><FaYoutube className="text-2xl"></FaYoutube></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
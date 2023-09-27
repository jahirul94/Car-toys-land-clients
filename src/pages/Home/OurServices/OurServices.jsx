import { FaHandHoldingHeart, FaHandsHelping, FaShippingFast } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";


const OurServices = () => {
    return (
        <div>
            <SectionTitle heading={"Our Services"} subHeading={"Enjoy our expensive services"}></SectionTitle>
            <div className="shadow-xl px-10 py-6 rounded-lg mb-20">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 text-center py-14 w-full">
                    <div className="me-4 mb-8 p-2 border border-slate-300 rounded-lg">
                        <span className="flex justify-center">
                            <FaHandHoldingHeart className="text-6xl text-slate-700" ></FaHandHoldingHeart>
                        </span>
                        <h3 className="text-xl font-bold text-center mb-4">Car Toy Sales</h3>
                        <p><small>Discover an exciting collection of car toys that will ignite your imagination. We stock a vast selection of remote-controlled cars, model kits, race tracks, and more. From classic muscle cars to sleek sports cars and rugged off-roaders, our inventory has something for every car lover. Choose from leading brands and the latest releases to find your perfect car toy.</small></p>
                    </div>
                    <div className="me-4 mb-8 p-2 border border-slate-300 rounded-lg">
                        <span className="flex justify-center">
                            <FaShippingFast className="text-6xl text-slate-700"></FaShippingFast>
                        </span>
                        <h3 className="text-xl font-bold text-center mb-4">Fast and Secure Shipping</h3>
                        <p><small>We understand that getting your car toys promptly and securely is essential. That{"'"}s why we offer fast and reliable shipping services. We carefully package your order to ensure it arrives in perfect condition, allowing you to start enjoying your new car toys right away.</small></p>
                    </div>
                    <div className="me-4 mb-8 border p-2 border-slate-300 rounded-lg">
                        <span className="flex justify-center">
                            <FaHandsHelping className="text-6xl text-slate-700"></FaHandsHelping>
                        </span>
                        <h3 className="text-xl font-bold text-center mb-4">Customer Support and Returns</h3>
                        <p><small>Your satisfaction is our top priority. If you have any questions, concerns, or issues with your order, our dedicated customer support team is here to assist you. We also offer a hassle-free return policy, ensuring that you can shop with confidence and peace of mind.</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
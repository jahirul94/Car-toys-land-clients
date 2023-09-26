import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle";


const Gallery = () => {

    const { data: pictures = [] } = useQuery({
        queryKey: ["pictures"],
        queryFn: async () => {
            const res = await axios.get('https://assignment-eleven-server-rose.vercel.app/toysPictures')
            return res.data;
        }
    })

    return (
        <div className="shadow-lg shadow-slate-400 pb-4 rounded-lg border border-gray-300">
            <SectionTitle heading={"Dream Drive Showcase"} subHeading={"Explore our available products gallery"}></SectionTitle>
            <div className="grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    pictures?.map(picture => <div data-aos="zoom-in" key={picture._id}>
                        <img className="h-80 w-full rounded-xl hover:scale-110 transition-transform duration-500" src={picture.toysPicture} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;
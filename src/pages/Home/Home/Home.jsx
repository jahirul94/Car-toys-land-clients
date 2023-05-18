import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";
import Toys from "../Toys/Toys";


const Home = () => {
    const toys = useLoaderData();
    return (
        <div>
             <Slider></Slider>
             <Gallery></Gallery>
             <div className="md:grid grid-cols-3 gap-4 my-10">
                  {/* {
                    toys.map(toy => <Toys key={toy._id} toy={toy}></Toys>)
                  } */}
             </div>
        </div>
    );
};

export default Home;
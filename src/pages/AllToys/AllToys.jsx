import { useLoaderData } from "react-router-dom";
import DisPlayAllToys from "./DisPlayAllToys";

const AllToys = () => {
    const toys = useLoaderData();
    return (
         <div className="lg:grid grid-cols-3 gap-4 my-10">
            {
              toys.map(toy => <DisPlayAllToys key={toy._id} toy = {toy}></DisPlayAllToys>)
            }
         </div>
    );
};

export default AllToys;
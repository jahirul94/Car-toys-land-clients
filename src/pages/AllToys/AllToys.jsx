import { useLoaderData } from "react-router-dom";
import DisPlayAllToys from "./DisPlayAllToys";

const AllToys = () => {
    const toys = useLoaderData();
    return (
         <div className="grid gap-4 my-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
              toys?.map(toy => <DisPlayAllToys key={toy._id} toy = {toy}></DisPlayAllToys>)
            }
         </div>
    );
};

export default AllToys;
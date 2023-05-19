import { useLoaderData } from "react-router-dom";
import DisPlayAllToys from "./DisPlayAllToys";
import { useState } from "react";
import Swal from "sweetalert2";

const AllToys = () => {
  const [toys , setToys] = useState(useLoaderData())

  const handleSearch = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const searchToy = toys.filter(toy => toy.name === name)
    if (searchToy.length == 0) {
        Swal.fire({
          icon: 'error',
          title: "You're Toy not available",
          text : "Are you sure you're search is a valid search ?"
        })
    }
     else {
      setToys(searchToy)
     }
  }


  return (
    <div>
      <form onSubmit={handleSearch} className="my-10 flex items-center justify-end">
        <input className="w-1/3 input input-bordered" type="text" name="name" id="" placeholder="Search" />
        <input type="submit" className="btn btn-outline" value="Search" />
      </form>
      <div className="overflow-x-auto w-full min-h-screen">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th className="text-center">Sub-category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              toys?.map(toy => <DisPlayAllToys key={toy._id} toy={toy}></DisPlayAllToys>)
            }
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default AllToys;
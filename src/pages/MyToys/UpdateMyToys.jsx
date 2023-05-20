import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyToys = () => {
    const loadedToy = useLoaderData();
    const { id } = useParams();
    const { name , price , availableQuantity, detailDescription } = loadedToy;

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.description.value;
        const updatedToy = { price, availableQuantity, detailDescription }
        
        fetch(`https://assignment-eleven-server-rose.vercel.app/myToys/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0 ){
                    Swal.fire(
                        'Updated!',
                        'Your Toys Details has been updated.',
                        'success'
                      )
                }
            })

    }


    return (
        <div className="p-24">
            <form onSubmit={handleUpdateToy}>
                <h2 className="text-5xl font-extrabold text-center mb-16">Update {name} info </h2>
                {/* category and price  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Enter Toy Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ms-2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={availableQuantity} placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* detail description  */}
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" defaultValue={detailDescription} placeholder="Detail description" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateMyToys;
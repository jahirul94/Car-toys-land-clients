import Swal from "sweetalert2";


const AddToy = () => {

    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const toysPicture = form.photo.value;
        const sellerName = form.seller.value;
        const sellerEmail = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.description.value;
        const addedToy = { name , toysPicture , sellerName , sellerEmail , category , price , rating , availableQuantity , detailDescription }
        fetch('http://localhost:5000/addAToy' , {
            method :"POST",
            headers :{
                'content-type':'application/json'
            },
            body : JSON.stringify(addedToy)
        })
        .then( res => res.json())
        .then(data =>{
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'Toy added Successfully',
                icon: 'success',
                confirmButtonText: 'Close'
              })
        })
    }




    return (
        <div className="p-24">
            <form onSubmit={handleForm}>
                <h2 className="text-5xl font-extrabold text-center mb-16">Add A Toy </h2>
                {/* toy name and photo url  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Toy Name" className="input input-bordered w-full me-4" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Picture URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Picture URL of the toy" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
           {/* seller name and email  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" placeholder="seller name" className="input input-bordered w-full me-4" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Enter seller email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
          {/* category and price  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter toys category Like teddy bear , dogs , cat , cows, etc." className="input input-bordered w-full me-4" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Enter Toy Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
          {/* rating and quantity  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Enter toys Rating" className="input input-bordered w-full me-4" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
           {/* detail description  */}
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Detail description" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddToy;
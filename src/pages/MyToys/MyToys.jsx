import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DisplayMyToys from "./DisplayMyToys";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [reload, setReload] = useState(false)
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/myToys?email=${user?.email}`;

//    load my data 
    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })

    }, [url, reload])
 
    // delete functionality
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // delete operation start 
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setReload(!reload)
                        }
                    })
                // end 
                
            }
        })
    }


    return (
        <div>
            {
                myToys.map(myToy => <DisplayMyToys
                    key={myToy._id}
                    myToy={myToy}
                    handleDelete={handleDelete}

                ></DisplayMyToys>)
            }
        </div>
    );
};

export default MyToys;
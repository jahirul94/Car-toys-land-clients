import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DisplayMyToys from "./DisplayMyToys";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [reload, setReload] = useState(false)
    const [myToys, setMyToys] = useState([]);
    const [ sort , setSort ] = useState("")
    const url = `https://assignment-eleven-server-rose.vercel.app/myToys?email=${user?.email}&sort=${sort}`;
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
                fetch(`https://assignment-eleven-server-rose.vercel.app/myToys/${id}`, {
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
        <div className="my-10 min-h-screen">
            <div className="text-end px-10">
                {/* dropdown start  */}
                   <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Sort By</label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><button onClick={() => setSort("")}>Default</button></li>
                            <li><button onClick={() => setSort(1)}>Price {"("} Low {">"} High {")"}</button></li>
                            <li><button onClick={ () => setSort(-1)}>Price {"("} High {">"} Low {")"} </button></li>
                        </ul>
                    </div>
                {/* end */}

            </div>
            <div className="divider"></div>
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


{/* <button
className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
>
<span>Dropdown</span>
<svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M7 10l5 5 5-5H7z" />
</svg>
</button> */}
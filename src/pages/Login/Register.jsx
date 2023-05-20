import { useContext, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    document.title = "register" + "-" + "Car Toys Land" ;
    const [ error , setError ] = useState("");
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value ;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser( email , password )
        .then( result =>{
            const user = result.user ;
            setError("")
            navigate("/")
            if(user){
                updateData( user , name , photo )
                Swal.fire(
                    'Done!',
                    'Your Account Created Successfully',
                    'success'
                )
                form.reset();
            }
        })
        .catch(err =>{
            setError( err.message)
        })


        const updateData = ( user , name , photo ) =>{
            updateProfile( user , {
                displayName: name , photoURL: photo
            }).then(()=>{}).catch(err=>setError(err.message))
       }
    }

    return (
        <div className="hero min-h-screen mt-4">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
             <div className="card-body">
                 <form onSubmit={handleRegister}>
                     <div className="form-control">
                         <h1 className="text-2xl font-bold mb-4">Please Register</h1>
                         <label className="label">
                             <span className="label-text">Name</span>
                         </label>
                         <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                         <label className="label">
                             <span className="label-text">Photo URL</span>
                         </label>
                         <input type="text" name='photo' placeholder="You're Photo Url" className="input input-bordered" required/>
                     </div>
                     <div className="form-control">
                         <label className="label">
                             <span className="label-text">Email</span>
                         </label>
                         <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                     </div>
                     <div className="form-control">
                         <label className="label">
                             <span className="label-text">Password</span>
                         </label>
                         <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                     </div>
                     <p className="text-red-600">{error}</p>
                     <div className="form-control mt-6">
                         <input type="submit" className="btn btn-primary" value="Login" />
                     </div>
                     <div className='text-center mt-4'>
                         <h5>Already Have an Account ? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></h5>
                     </div>
                 </form>
             </div>
         </div>
     </div>
    );
};

export default Register;
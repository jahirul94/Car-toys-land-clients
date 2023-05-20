import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import Swal from "sweetalert2";


const Login = () => {
    document.title = "login" + "-" + "Car Toys Land" ;
    const { logInUser, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        logInUser(email, password)
            .then(result => {
                const user = result.user;
                setError("")
                if (user) {
                    Swal.fire(
                        'Login!',
                        'Your Account Log in Successfully.',
                        'success'
                    )
                    form.reset();
                    navigate(from , {replace : true})
                }
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const handleLoginWithGoogle = () => {
        setError("")
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                setError("")
                if(loggedUser){
                    Swal.fire(
                        'Done!',
                        'Your Account Log in Successfully.',
                        'success'
                    )
                    navigate(from , {replace : true})
                }
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <div className="hero min-h-screen mt-4">
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <h1 className="text-2xl font-bold mb-4">Please Login</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <p className="text-red-600">{error}</p>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <div className='text-center mt-4'>
                            <h5>New to Sports Toys ? <Link to='/register' className='text-orange-600 font-bold'>Register </Link></h5>
                        </div>
                    </form><hr />
                    <div className="flex justify-center">
                        <button onClick={handleLoginWithGoogle} className="flex items-center">Connect With <FaGoogle className="ms-2"></FaGoogle></button>
                    </div><hr />
                </div>
            </div>
        </div>
    );
};

export default Login;
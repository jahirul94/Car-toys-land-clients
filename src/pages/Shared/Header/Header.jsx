import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do You want to logout this Account ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, Log Out !'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire(
                            'Log Out!',
                            'Your Account has been Logged Out.',
                            'success'
                        )
                    })
                    .catch(err => console.log(err))
            }
        })
    }


    const navOption = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allToys'>All Toys</NavLink></li>
        <div className="lg:flex">
            <li><NavLink to='/myToys'>My Toys</NavLink></li>
            <li><NavLink to='/addAToys'>Add A Toy</NavLink></li>
            {user && <li><button className="font-semibold" onClick={handleLogOut}>Log Out</button></li>}
        </div>
    </>
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content px-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-neutral dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/TvMxyph/car-toys-logo-icon-vector-35444153-1.jpg" className="h-12 w-12 me-2 rounded-3xl" alt="" />
                        <h2 className="text-2xl font-bold">Car Toys Land</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <img className="w-14 rounded-full" title={user?.displayName} src={user?.photoURL} alt="" /> : <button className="font-semibold px-8"><Link to='/login'>Login</Link></button>}
                </div>
            </div>
        </div>
    );
};
export default Header;
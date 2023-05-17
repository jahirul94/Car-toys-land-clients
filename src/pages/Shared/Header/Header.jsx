import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navOption = <>
        <li><Link className="font-semibold" to='/'>Home</Link></li>
        <li><Link className="font-semibold" to='/blogs'>Blogs</Link></li>
        <li><Link className="font-semibold" to='/allToys'>All Toys</Link></li>
        {user && <div className="lg:flex">
            <li><Link className="font-semibold" to='/myToys'>My Toys</Link></li>
            <li><Link className="font-semibold" to='/addAToys'>Add A Toy</Link></li>
            <li><button className="font-semibold" onClick={handleLogOut}>Log Out</button></li>
        </div> }
    </>
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src="https://img.freepik.com/free-vector/different-kind-toys_1308-74241.jpg?size=626&ext=jpg&ga=GA1.2.1707419779.1680549688&semt=ais" className="h-12 w-12 me-2 rounded-3xl" alt="" />
                        <h2 className="text-2xl font-bold">Sport Toys</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    { user ? <img className="w-14 rounded-full" title={ user?.displayName} src = {user?.photoURL} alt="" /> : <button className="font-semibold px-8"><Link to='/login'>Login</Link></button>}
                </div>
            </div>
        </div>
    );
};
export default Header;
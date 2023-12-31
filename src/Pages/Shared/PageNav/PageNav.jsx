import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const PageNav = () => {
    const { user,useLogout } = useContext(AuthContext);
    const handelUserLogin = () =>{
        useLogout().then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Logout Successful',
                text:"Come Back Soon",
              });

        }).catch((error) => {
            console.log(error.message)
        });
    }
    const navlist = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        {user ? (
            <>
                <li><Link to="/mytoys">My Toys</Link></li>
                <li><Link to="/addtoys">Add a Toy</Link></li>
            </>
        ) : null}
        <li><Link to="/blogs">Blogs</Link></li>

    </>
    console.log(user);
    return (
        <div className="navbar bg-slate-200 lg:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        {
                            navlist
                        }
                    </ul>
                </div>
                <Link className="flex items-center gap-2" to='/'><img className="h-10" src={logo} alt="" />Toy-Monster</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlist}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {user ? (
                    <div className="flex space-x-3">
                        <img
                            className="h-10 rounded-full hover:cursor-pointer"
                            src={user?.photoURL ? user.photoURL : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"}
                            alt=""
                            title={user?.displayName || ""}
                        />

                        <button onClick={handelUserLogin}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link className="mr-3" to="/login">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PageNav;
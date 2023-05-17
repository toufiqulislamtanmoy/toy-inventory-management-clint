import {Link} from "react-router-dom";
import logo from '../../../assets/logo.png'
const PageNav = () => {
    const navlist = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">All Toys</Link></li>
        <li><Link>My Toys</Link></li>
        <li><Link>Add A Toys</Link></li>
        <li><Link>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-neutral text-neutral-content px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {
                            navlist
                        }
                    </ul>
                </div>
                <Link to='/'><img className="h-10" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlist}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="h-10 rounded-full" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" />
            </div>
        </div>
    );
};

export default PageNav;
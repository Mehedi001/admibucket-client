
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const navItem = <>
        <li><Link className="hover:bg-[#187E89] focus:bg-[#187E89]  hover:text-white text-[#187E89]" to="/">Home</Link></li>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/colleges">Colleges</Link></li>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/admission">Admission</Link></li>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/myCollege">My College</Link></li></>

    return (
        <nav className="navbar border-[#187E89] border border-b-1 pb-4">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <ul className="lg:flex menu menu-horizontal px-1 hidden ">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-center gap-2 lg:flex items-center">
                <img className="w-8 hidden lg:block" src="/logo.png" alt="" />
                <Link to="/" className="text-2xl font-bold text-[#187E89]">ADMIBUCKET</Link>
                
            </div>
            <div className="navbar-end gap-4">
                
                <div title={user?.email} className="avatar relative items-center flex-col">
                    <div className="w-12 rounded-full ring ring-[#187E89] ring-offset-base-100 ring-offset-2">
                        {
                            user ? <img src={user.photoURL} /> : <img title="This is Profile photo of user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="this is profile photo of user" />
                        }
                    </div>
                    {
                    user ? <h2 className="absolute top-10 text-white px-1 bg-[#187E89] text-sm font-bold uppercase">{user.displayName}</h2> : <h3></h3>
                }
                </div>

                {
                    user ? <button onClick={logout} className="btn btn-sm lg:btn-md border-0 hover:bg-[#0e4f57] bg-[#187E89] text-white ">Logout</button> : <Link to="/login" className="btn lg:btn-md btn-sm border-0 hover:bg-[#0e4f57] bg-[#187E89] text-white ">Login</Link>
                }

            </div>
            <div className="hr-main">

            </div>
        </nav>
    );
};

export default Header;
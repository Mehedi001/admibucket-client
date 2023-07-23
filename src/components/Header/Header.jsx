
import { Link } from "react-router-dom";



const Header = () => {


    const navItem = <>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/">Home</Link></li>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/colleges">Colleges</Link></li>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/admission">Admission</Link></li>
        <li><Link className="hover:bg-[#187E89] hover:text-white text-[#187E89]" to="/myCollege">My College</Link></li></>

    return (
        <nav className="navbar border-[#187E89] border border-b-1">
            
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
            <div className="navbar-center lg:flex">
                <Link to="/" className="text-2xl font-bold text-[#187E89]">ADMIBUCKET</Link>
                
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-12 mr-4 rounded-full ring ring-[#187E89] ring-offset-base-100 ring-offset-2">
                        <img title="This is Profile photo of user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="this is profile photo of user" />
                    </div>
                </div>

                <Link to="/login" className="btn border-0 hover:bg-[#061f12] bg-[#187E89] hover:text-white text-[#FFE5B4]">Logout</Link> : <Link to="/login" className="btn border-0 hover:bg-[#061f12] bg-[#187E89] hover:text-white text-[#FFE5B4]">Login</Link>

            </div>
            <div className="hr-main">

            </div>
        </nav>
    );
};

export default Header;
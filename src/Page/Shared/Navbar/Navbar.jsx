import React from 'react';
import { Link } from 'react-router-dom';
import user from'../../../assets/user-2-463e9193.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-cyan-700 ">
  <div className="flex-1">
    {/* <a className="btn btn-ghost normal-case text-xl">Dream College</a> */}
  </div>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>  <Link>Home</Link></li>
        <li>
          <Link> Colleges</Link>
        </li>
        <li>  <Link>Admission</Link></li>
        <li>  <Link>My College</Link></li>
        <li>  <Link to="login">Log in</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Dream College</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>  <Link>Home</Link></li>
        <li>
          <Link> Colleges</Link>
        </li>
        <li>  <Link>Admission</Link></li>
        <li>  <Link>My College</Link></li>
        <li>  <Link to="login">Log in</Link></li>
    </ul>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-cyan-700 border-gray-300" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>














        </div>
    );
};

export default Navbar;
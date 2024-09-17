import React from 'react'
import Avatar from "react-avatar"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar bg-base-300 w-full justify-between">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow">
            <li><NavLink to="/">Homepage</NavLink></li>
            <li><NavLink to="/playground">Playground</NavLink></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <p className='text-3xl font-bold'>BLACKASH
          <span className="text-accent" >.Code</span>
        </p>
      </div>
      <div className="flex-none ">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" >
            <Avatar className=" btn-circle avatar" size='40' name="BlackAsh" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>

            <li><NavLink to="/setting">Settings</NavLink></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
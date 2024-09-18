import React from 'react'
import Avatar from "react-avatar"
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <nav className="navbar sticky z-30 top-0 glass px-8 w-full ">
      <div className=" navbar-start">
        <p className='text-3xl font-bold'>BLACKASH
          <span className="text-accent" >.Code</span>
        </p>
      </div>
      <div className="drawer z-30 drawer-end navbar-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button">
            <i><FiMenu size={20} /></i>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 space-y-2 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <Avatar className="mx-auto" size='70' round={true} name="BlackAsh" />
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/playground">Playground</NavLink></li>
            <li><NavLink to="/setting">Settings</NavLink></li>
            <li><NavLink to="/web-builder">Web Builder</NavLink></li>
            <li><NavLink to="/coding-problems">Coding Problems</NavLink></li>
            <li><NavLink to="/learn-to-code">Learn To Code</NavLink></li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
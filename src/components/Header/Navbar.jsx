import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Navbar = () => {
  const links = (
    <>
      {/* <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] pb-[3px] rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
      </li> //not necessary in this way */}

      {/* Home Page Navigation Start.*/}
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive
            ? 'font-semibold text-lg text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[3px] before:bg-linear-to-r before:from-[#632EE3] before:to-[#9F62F2] before:transition-all before:duration-300 before:ease-in-out transition-all duration-300 ease-in-out'
            : 'font-semibold text-lg hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] transition-all duration-300 ease-in-out'
        }
      >
        Home
      </NavLink>
      {/* Home Page Navigation End */}

      {/* Apps Page Navigation Start */}
      <NavLink
        to={'/allApps'}
        className={({ isActive }) =>
          isActive
            ? 'font-semibold text-lg text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[3px] before:bg-linear-to-r before:from-[#632EE3] before:to-[#9F62F2] before:transition-all before:duration-300 before:ease-in-out transition-all duration-300 ease-in-out'
            : 'font-semibold text-lg hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] transition-all duration-300 ease-in-out'
        }
      >
        Apps
      </NavLink>
      {/* Apps Page Navigation End */}

      {/* Installation Page Navigation Start */}

      <NavLink
        to={'/installation'}
        className={({ isActive }) =>
          isActive
            ? 'font-semibold text-lg text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2] relative before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[3px] before:bg-linear-to-r before:from-[#632EE3] before:to-[#9F62F2] before:transition-all before:duration-300 before:ease-in-out transition-all duration-300 ease-in-out'
            : 'font-semibold text-lg hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] transition-all duration-300 ease-in-out'
        }
      >
        Installation
      </NavLink>

      {/* Installation Page Navigation End */}

      {/* Installation Page Navigation Start. 2 NavLink is usage for better gradient color. it's an another way to add gradient color.*/}
      {/* <div className="relative inline-block">
        <NavLink
          to={'/installation'}
          className={
            ({ isActive }) =>
              isActive
                ? 'font-semibold text-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text' // Active styles
                : 'font-semibold text-lg text-black hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text transition duration-300' // Inactive styles
          }
        >
          Installation
        </NavLink>
        <NavLink
          to={'/installation'}
          className={
            ({ isActive }) =>
              isActive &&
              'absolute inset-x-0 bottom-1 h-[3px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] top-7 transition duration-300' // Active styles
          }
        ></NavLink>
      </div> */}
      {/* Installation Page Navigation End */}
    </>
  );
  return (
    <div className="navbar max-w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to={'/'} className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className='w-10'/>
          <p className="font-bold text-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Trending Apps Store
          </p>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/MdKhairulHassan"
          target="_blank"
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#b885ff] hover:to-[#6d2fff] btn text-white text-lg font-semibold transition duration-300"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;

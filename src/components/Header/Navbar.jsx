import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const links = (
    <>
      {/* <li className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] pb-[3px] rounded-tl-lg rounded-tr-2xl rounded-bl-2xl rounded-br-2xl">
      </li> */}
      <li>
        <div class="relative inline-block group">
          <span className="font-semibold text-lg bg-linear-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2] from-black to-black group-hover:text-transparent bg-clip-text border-b-2 text-transparent">
            Home
          </span>
          <span class="absolute inset-x-0 bottom-1 h-[3px] bg-linear-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2] top-7"></span>
        </div>
      </li>
      <li>
        <div class="relative inline-block group">
          <span className="font-semibold text-lg bg-linear-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2] from-black to-black group-hover:text-transparent bg-clip-text border-b-2 text-transparent">
            Apps
          </span>
          <span class="absolute inset-x-0 bottom-1 h-[3px] bg-linear-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2] top-7"></span>
        </div>
      </li>
      <li>
        <div class="relative inline-block group">
          <span className="font-semibold text-lg bg-linear-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2] from-black to-black group-hover:text-transparent bg-clip-text border-b-2 text-transparent">
            Installation
          </span>
          <span class="absolute inset-x-0 bottom-1 h-[3px] bg-linear-to-r group-hover:from-[#632EE3] group-hover:to-[#9F62F2] top-7"></span>
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar">
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
        <a className="w-10 flex items-center gap-2">
          <img src="/logo.png" alt="logo" />
          <span className="font-bold text-lg bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            HERO.IO
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/MdKhairulHassan"
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white text-lg font-semibold"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;

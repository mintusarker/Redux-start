import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='h-14 bg-indigo-200 rounded-md m-2 mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1 className="text-xl text-green-600">High-Tech</h1>

        <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 px-2 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            type='text'
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <div className="inline-flex items-center gap-5">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <Link to='/wishlist'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
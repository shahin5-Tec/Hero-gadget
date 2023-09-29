import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <nav className=" mx-28 px-4  py-5   md:max-w-full lg:px-8 lg:max-w-screen-xl">
      <div className="flex relative items-center  justify-between">
        {/* logo-part */}

        <Link
          to="/"
          aria-label="HeroGadget"
          title="HeroGadget"
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-5 h-5 rounded-full text-cyan-600"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
            HeroGadget
          </span>
        </Link>
        {/* navbar-components */}
        <ul className="lg:flex items-center font-semibold  space-x-8">
          <li>
            <NavLink to='/'
             className={({ isActive }) => isActive ? "text-blue-600" : ""}
            >
            Home
            </NavLink>
           
          </li>
          <li>
            <NavLink to='/shop'
             className={({ isActive }) => isActive ? "text-blue-600" : ""}
            >
            Shop
            </NavLink>
           
          </li>
          <li>
            <NavLink to='/'
             className={({ isActive }) => isActive ? "text-cyan-400" : ""}
            >
           <span>
           <FontAwesomeIcon icon={faShoppingCart} />
           </span>
            </NavLink>
           
          </li>
          <li>
            <NavLink to='/about'
             className={({ isActive }) => isActive ? "text-blue-600" : ""}
            >
            About us
            </NavLink>  
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

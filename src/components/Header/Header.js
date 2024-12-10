import React from "react"
import { facebook, instagram, linkedIn, whatsapp } from "../../utils/icon"
//import { NavLink } from "react-router"

const Header = () => {
  return (
    <nav className="px-10 py-3 bg-primary-bg/60 fixed top-0 w-full z-50 backdrop-blur-md border-b border-secondary-bg">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* logo container */}
        <div>
          {/* <img src="/logo.svg" width={57} height={31} className="" alt="logo" /> */}
          <span className="font-montserrat text-5xl text-primary-text font-semibold">
            NsRt
          </span>
        </div>
        {/* <div className="space-x-8 text-white font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-primary-text"
                : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-primary-text"
                : ""
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-primary-text"
                : ""
            }
          >
            Work
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-primary-text"
                : ""
            }
          >
            Contact
          </NavLink>
        </div> */}

        {/* Social Media */}
        <div className="space-x-3">
          <button className="p-2 rounded-full bg-primary-text">
            {facebook}
          </button>
          <button className="p-2 rounded-full bg-primary-text">
            {linkedIn}
          </button>
          <button className="p-2 rounded-full bg-primary-text">
            {instagram}
          </button>
          <button className="p-2 rounded-full bg-primary-text">
            {whatsapp}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header

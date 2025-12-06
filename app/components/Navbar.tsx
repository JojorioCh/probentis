import { Link, NavLink } from "react-router";
import logo from "../assets/probentis-logo.jpg";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="PROBENTIS Logo" 
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex gap-8 text-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

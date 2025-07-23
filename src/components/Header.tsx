import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-sky-600 p-4 text-white">
      {/* desktop View Navigation */}
      {/* <nav className="container mx-auto flex items-center justify-between"> */}
      <nav className="mx-auto flex items-center justify-between px-4 xl:px-8 2xl:px-16">
        <Link to="/" className="text-lg font-bold">
          Fashion Shop
        </Link>
        <button onClick={toggleMenu} className="block text-xl lg:hidden">
          &#8801;
        </button>
        <ul className="hidden gap-6 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-gray-300"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
        {/* Mobile View Navigation */}
        <div
          className={`fixed inset-0 z-50 transform bg-sky-600/70 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-6">
            <Link to="/" className="text-3xl" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/shop" className="text-3xl" onClick={toggleMenu}>
              Shop
            </Link>
            <Link to="/cart" className="text-3xl" onClick={toggleMenu}>
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

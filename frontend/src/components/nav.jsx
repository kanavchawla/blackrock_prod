import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/operations/auth";
import image from "../assets/image.png";

const Nav = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="container flex items-center justify-around pt-4 h-0 pb-3 sticky top-0 z-50 -mt-8">
      <div
        className="cursor-pointer rounded-full transition font-semibold duration-300 bg-gray-200 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900"
        style={{ transform: "none" }}
      >
        <a href="/">
          <img src={image} className="max-w-40 rounded-full "></img>
        </a>
      </div>
      <ul
        className="hidden items-center gap-1 rounded-full px-4 lg:flex bg-gray-200 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900"
        style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
      >
        <a href="/">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Home
          </li>
        </a>
        <a href="/lms">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            LMS
          </li>
        </a>
        <a href="/risk">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Risk & Analysis
          </li>
        </a>
        <a href="/guidex">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            GuideX
          </li>
        </a>
        <a href="/compare">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Comparison
          </li>
        </a>
        <a href="https://go-cap-paper-trading.netlify.app/">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Dummy-trading
          </li>
        </a>
        <a href="/search">
          <li className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Resource finder
          </li>
        </a>
        {/* <a href="/interestList">
          <li className="cursor-pointer text-green-500 select-none whitespace-nowrap italic rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400 special-list-item">
            POI
          </li>
        </a> */}
        <a href="/interestList">
          <li className="cursor-pointer text-green-500 select-none whitespace-nowrap italic rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400 special-list-item">
            POI
          </li>
        </a>

        {/* Community Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400"
          >
            Community
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
              <Link
                to="/AskQuestion"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Ask a Question
              </Link>
              <Link
                to="/ViewQuestion"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                View Questions
              </Link>
            </div>
          )}
        </div>
      </ul>
      <div className="flex items-center gap-4 mr-14">
        <div style={{ transform: "none", transformOrigin: "100% 50% 0px" }}>
          <div className="flex gap-3">
            {!token && (
              <Link
                to="/login"
                type="button"
                className="bg-blue-500 text-white inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-primary text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-5 md:px-7 py-2 md:py-3 shadow-lg"
              >
                Sign In
              </Link>
            )}
            {token && (
              <button
                type="button"
                onClick={handleLogout}
                className="bg-blue-500 text-white inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-primary text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-5 md:px-7 py-2 md:py-3 shadow-lg"
              >
                Sign Out
              </button>
            )}
            <button className="relative h-12 w-12 shrink-0 cursor-pointer select-none rounded-full p-2 transition-all duration-300 focus:outline-none lg:hidden bg-gray-50 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900">
              <span className="sr-only">open menu</span>
              <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/3 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-5 transform bg-current transition duration-300 rounded-full ease-in-out -translate-y-[7px]"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-5 transform bg-current transition duration-300 rounded-full ease-in-out"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-5 transform bg-current transition duration-300 rounded-full ease-in-out translate-y-[7px]"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

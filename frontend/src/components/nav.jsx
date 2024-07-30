import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {logout} from "../services/operations/auth"

const Nav = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };
  return (
    <nav class="container flex items-center justify-around pt-4 pb-3 sticky top-0 z-50">
      <div
        class="cursor-pointer rounded-full p-4 transition duration-300 lg:py-3.5 lg:px-6 bg-gray-200 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900"
        style={{ transform: "none" }}
      >
        <a href="/">
          
        </a>
      </div>
      <ul
        class="hidden items-center gap-1 rounded-full px-4 lg:flex bg-gray-200 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900"
        style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
      >
        <a href="/">
          <li class="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Home
          </li>
        </a>
        <a href="/crowd">
          <li class="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            CrowdFunding
          </li>
        </a>
        <a href="/poster">
          <li class="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            AI poster
          </li>
        </a>
        <a href="/community">
          <li class="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            Add Success Stories
          </li>
        </a>
        <a href="/lms">
          <li class="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            LMS
          </li>
        </a>
        <a href="/guidex">
          <li class="cursor-pointer select-none whitespace-nowrap rounded-full p-3 font-semibold transition duration-300 hover:text-blue-400">
            GuideX
          </li>
        </a>
      </ul>
      <div class="flex items-center gap-4">
        <div style={{ transform: "none", transformOrigin: "100% 50% 0px" }}>
          <div class="flex gap-3 ">
            {!token && (<Link
              // style={{position:"relative",right:"90px"}}
              to="/login"
              type="button"
              class="bg-blue-500 text-white inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-primary text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-5 md:px-7 py-2 md:py-3 shadow-lg"
            >
              Sign In
            </Link>)}
            {token && (<button
              // style={{position:"relative",right:"90px"}}
              type="button"
              onClick={handleLogout}
              class="bg-blue-500 text-white inline-flex items-center whitespace-nowrap select-none justify-center font-medium gap-2 duration-200 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none rounded-lg disabled:opacity-50 disabled:grayscale bg-primary text-primary-foreground hover:bg-opacity-60 text-sm md:text-md px-5 md:px-7 py-2 md:py-3 shadow-lg"
            >
              Sign Out
            </button>)}
            <button class="relative h-12 w-12 shrink-0 cursor-pointer select-none rounded-full p-2 transition-all duration-300 focus:outline-none lg:hidden bg-gray-50 bg-opacity-60 hover:bg-opacity-80 backdrop-blur text-gray-900">
              <span class="sr-only">open menu</span>
              <div class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/3 transform">
                <span
                  aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform bg-current transition duration-300 rounded-full ease-in-out -translate-y-[7px]"
                ></span>
                <span
                  aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform bg-current transition duration-300 rounded-full ease-in-out"
                ></span>
                <span
                  aria-hidden="true"
                  class="absolute block h-0.5 w-5 transform bg-current transition duration-300 rounded-full ease-in-out translate-y-[7px]"
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

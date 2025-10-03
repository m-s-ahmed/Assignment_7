import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar flex justify-between max-w-[1280px] mx-auto">
          <div>
            <p className="text-xl font-bold ">CS-Ticket System</p>
          </div>

          <div className="hidden md:flex gap-5 items-center">
            <div className="flex items-center gap-5">
              <p>
                <a href="#">Home</a>
              </p>
              <p>
                <a href="#">FAQ</a>
              </p>
              <p>
                <a href="#">Changelog</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
              <p>
                <a href="#">Download</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </div>
            <div>
              <button className="btn text-white bg-linear-to-t from-sky-600 to-indigo-500">
                <span>+</span> New Ticket
              </button>
            </div>
          </div>

          {/* For Mobile View */}

          <div class="navbar-end md:hidden">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <button className="btn w-full mt-3 text-white bg-linear-to-t from-sky-600 to-indigo-500 ">
                    <span>+</span>New Tickets
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

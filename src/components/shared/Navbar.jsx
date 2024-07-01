import { Button, Typography } from "antd";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Typography className="text-3xl font-bold text-black">wassex</Typography>
        </div>
        {/* lg */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to='/dashboard'><Button style={{ textDecoration: 'underline' }} type="dark">Dashboard</Button></Link>
            <Link to='/'><Button style={{ textDecoration: 'underline' }} type="dark">Home</Button></Link>
            <Button to='/mens' style={{ textDecoration: 'underline' }} type="dark">Mens</Button>
            <Button to='/womens' style={{ textDecoration: 'underline' }} type="dark">Womens</Button>
            <Button to='/customer-service' style={{ textDecoration: 'underline' }} type="dark">Customer Service</Button>
            <Button to='/about-us' style={{ textDecoration: 'underline' }} type="dark">About Us</Button>
          </ul>
        </div>

        <div className="navbar-end">
          {/* cart section */}
          <div className="dropdown dropdown-end me-6 hidden lg:block">
            <div tabIndex={0} role="button" className="">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item bg-black text-white">8</span>
              </div>
            </div>
          </div>
          {/* cart section */}
          <Link to='/login'><Button type="dark" className="bg-black text-white"><LuLogIn />Login</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

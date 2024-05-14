import React from "react";
import logo from "../images/Group 33091.png";
import logo1 from "../images/EyeOnEgypt2.png";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-login">
      <div className="container vh-100">
        <div className="row   justify-content-center align-items-center h-100">
          <div className="col-lg-6   shadow-lg p-5 h-75 mt-5">
            <div className=" d-flex flex-column align-items-center mt-5">
              <img src={logo1} alt="" className="w-40" />
              <img src={logo} alt="logo" className="w-40 mx-auto my-3" />
              <h3 className="text-main fw-bold">Welcome Back</h3>
            </div>
            <form>
              <input
                className=" form-control w-100 mt-4"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
              />

              <input
                className=" form-control w-100 my-4"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              <button className="btn submit-btn fw-bold   w-100">
                Login
              </button>
            </form>
            <div className=' d-flex justify-content-between mt-4'>
            <span>Don't have an Account?</span>
            <NavLink className='text-main ' to='/signup'>SignUp</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

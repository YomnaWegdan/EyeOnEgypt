


import React, { Fragment } from "react";

import img from "../images/Ellipse 31.png";

export default function Button({ show, showBtn }) {
  return (
    <div className="chat-btn z-3">
      {!show ? (
        <img
          src={img}
          alt=""
          className=" w-100 cursor-pointer "
          onClick={() => showBtn()}
        />
      ) : (
        <button
          className="close rounded-circle bg-light-color  btn w-100 h-100"
          onClick={() => showBtn(!show)}
        >
          <i className=" fa fa-close text-main"></i>
        </button>
      )}
    </div>
  );
}

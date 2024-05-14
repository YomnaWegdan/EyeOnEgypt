import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardDetails({ name, data, img, location }) {
  const navigate = useNavigate();

  return (
    <>
    <div className="card-details  min-vh-100 ">
      <div className="container pt-5 mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12  d-flex justify-content-between">
            <div className="d-flex">
              <i
                class="fa-solid fa-circle-arrow-left fa-2x light-color cursor-pointer"
                onClick={() => navigate(-1)}
              ></i>
              <h3 className=" text-main mx-3 fw-bold">ForAll</h3>
            </div>
          </div>
          

          <div className="col-lg-5 ">
          <div className=" mb-2">
            <i className="fa-solid fa-location-dot text-sec"></i>
            <span className="mx-1 text-main cursor-pointer">{location}</span>
          </div>
            <img
              src={img}
              alt={name}
              className="w-100  object-fit-cover rounded-2 "
              height={360}
            />
          </div>
          <div className="col-lg-7">
            <div className="content bg-light-color p-5 overflow-auto rounded-2">
              <h1 className="text-main pb-3 text-center">{name}</h1>
              <p>{data}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

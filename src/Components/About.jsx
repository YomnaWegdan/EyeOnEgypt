import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../images/2020082405030838.jpg";
import img2 from "../images/shutterstock_1257009283.png";
import img3 from "../images/pyramids-2371501_1280.jpg";

import image1 from "../images/loc.PNG";
import image2 from "../images/currency.PNG";
import image3 from "../images/lang.PNG";
import image4 from "../images/terr.PNG";

import imag1 from '../images/Downtown-Cairo-Zamalek-the-Nile-river.jpg'
import imag3 from '../images/2b1f01ee6f5303287e41261aaf55762e.jpg'
import imag4 from '../images/_Luxor .jpg'
import imag5 from '../images/Things-to-do-in-Aswan.jpg.optimal.jpg'
import imag2 from '../images/istockphoto-1146931869-170667a.jpg'

export default function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mt-5 pt-5 ">
        <div className="mt-2 d-flex">
          <i
            class="fa-solid fa-circle-arrow-left fa-2x light-color"
            onClick={() => navigate(-1)}
          ></i>
          <h5 className="text-main fw-bold ms-2">About Egypt</h5>
        </div>
        <div className="row align-items-center justify-content-between ">
          <div className="col-xl-6 col-md-12 bg-light-color mt-3 p-4 shadow rounded-2">
            <h6 className=" fw-bold text-sec py-2">Egypt History</h6>
            <p>
              Egypt is without a doubt of the greatest civilization ever
              created. The history of Egypt dated back to 40,000 BC years but
              all the glory is focused on the last 5170 years when Egypt took
              its first step and became a unified country under the rule of one
              king called Narmer, the founder of the first dynasty. Through the
              years, Egypt established her repudiation as a powerful kingdom
              thanks to the annual river flood that acted as the bloodstream and
              the life bringer of Egypt as the ancient Greek historian Herodotus
              stated: 'Egypt is the Gift of the Nile'. For the next three
              millennia, many great pharaohs of strong men and women worked on
              driving the country to new heights of wealth and power. During
              this time many great monuments all over the county were
              constructed and countless beautiful artifacts were created to
              protect their achievements from oblivion and immortalize their
              legacy for many generations to come. After the end of the last
              native dynasty by the hand of the Persians in 341 BC and soon
              enough came the Greek, Romans and Byzantines then finally came the
              Arabs who introduced the religion of Islam and the current
              language Arabic during the 7th century under the leadership of the
              Mamluks and the Fatimid who filled the city of Cairo with
              countless mosques and schools such as Al-Azhar which was the
              second largest university in history. The country then became
              under the rule of the Ottoman empire in 1517 until the empire fell
              and the country under British rule in 1882 until it gained its
              independence in 1922.
            </p>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="d-flex  ">
              <div className="col-xl-6 col-md-6">
                <img
                  src={img1}
                  alt="img1"
                  className="w-100 object-fit-cover"
                  height={230}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <img
                  src={img2}
                  alt="img1"
                  className="w-100 object-fit-cover"
                  height={230}
                />
              </div>
            </div>
            <div className="col-xl-12 col-md-12">
              <img src={img3} alt="img1" className="w-100" />
            </div>
          </div>

          <div className=" col-md-12 mt-5 mb-3">
            <h4 className="text-center text-sec">General Information</h4>
          </div>
          <div className=" col-lg-3 col-md-6 text-center">
            <img src={image1} alt="" className="w-25" />
            <h6>Capital :</h6>
            <span className="text-main fw-bold">Cairo</span>
          </div>
          <div className=" col-lg-3 col-md-6 text-center">
            <img src={image2} alt="" className="w-25" />
            <h6>Official language :</h6>
            <span className="text-main fw-bold">Arabic</span>
          </div>
          <div className=" col-lg-3 col-md-6 text-center">
            <img src={image3} alt="" className="w-25" />
            <h6>Currency :</h6>
            <span className="text-main fw-bold">Egyptian Pound</span>
          </div>
          <div className=" col-lg-3 col-md-6 text-center">
            <img src={image4} alt="" className="w-25" />
            <h6>Territory :</h6>
            <span className="text-main fw-bold">1 001 450 km²</span>
          </div>
          </div>
          <div className="row justify-content-between align-items-center g-5 mt-5">

          <div className=" col-md-12 mb-3">
            <h4 className="text-center text-sec">What See and Where ?</h4>
          </div>
          <div className=" col-lg-6 col-md-12">
          <h5 className="text-main fw-bold ">Cairo</h5>
          <p>Start exploring the country from Cairo, the capital of Egypt. This city is of special importance to the Islamic world. It's often called the city of thousands of minarets. It's home to about ten million people. In Cairo, the branches of history are intertwined: modern skyscrapers do not create dissonance with ancient mosques. Cairo is roughly divided into two parts: historical and contemporary. The old city is located on the east bank of the Nile. There are practically no new buildings on its territory; it is an area of ancient mosques. But the modern part of Cairo does not differ from the usual urban landscapes. There are government buildings and office skyscrapers made of glass and concrete.</p>     
          </div>
          <div className=" col-lg-6 col-md-12">
          <img src={imag1} alt="cairo-img" className="w-100 object-fit-cover" height={300}/>
          </div>

          <div className=" col-lg-6 col-md-12">
          <h5 className="text-main fw-bold ">Giza</h5>
          <p> When we hear about Giza, the imagination immediately draws the outlines of the Great Sphinx as well as the well-known pyramids: Cheops, Khafre, and Menkaure. The place is exciting because of the great history of ancient Egyptian burials. Not only the pharaohs, but also all their closest circle were buried here: wives, brothers, sisters, children, and servants. It's also worth coming here to see the Village of the Pharaohs. The tour starts with a barge ride along the canals. Moreover, Giza offers the largest zoo in Egypt, where the natural habitat for animals is created.</p>          
          </div>
          <div className=" col-lg-6 col-md-12">
          <img src={imag2} alt="cairo-img" className="w-100"  height={300}/>
          </div>

          <div className=" col-lg-6 col-md-12">
          <h5 className="text-main fw-bold ">Alexandria</h5>
          <p>
          Alexandria is the largest port city in Egypt, combining ancient Egyptian architectural structures and buildings in the Victorian colonial style. Comfortable beaches allow you to have a rest for the body, and rich culture offers attractions for the soul. Start exploring the city by visiting the National Museum, which is located in the center. The exhibits represent four historical eras: ancient, Greco-Roman, Coptic, and Islamic. Be sure to visit the catacombs of Kom el-Shouqafa. An unusual structure stores a whole network of funerary halls. The Pompey's Pillar — a famous monument of ancient times — is also popular with tourists. You should also admire the extraordinary architecture of the Egyptian Khedive's palace, the Abu al-Abbas al-Mursi Mosque and the Citadel of Qaitbay, built on the ruins of the lighthouse in Alexandria. 
          </p></div>
          <div className=" col-lg-6 col-md-12">
          <img src={imag3} alt="cairo-img" className="w-100"  height={300}/>
          </div>

          <div className=" col-lg-6 col-md-12">
          <h5 className="text-main fw-bold ">Luxor</h5>
          <p> Luxor is the city that once housed the capital of Ancient Egypt, Thebes. The city contains numerous treasures and architectural monuments included in the UNESCO World Heritage List. The territory of the city is roughly divided into "City of the Living" and "City of the Dead". The "City of the Living" is a typical residential area, which occupies the right bank of the Nile. Tourists come here to see how ordinary Egyptians live and how the Luxor's temple looks like. "The City of the Dead" is located on the opposite side of the Nile. The wide diversity of archaeological sites beckons tourists. But you should mind that the climate here is hot enough, precipitation is a rare phenomenon, which is most often manifested in the form of dew.  </p>
          </div>
          <div className=" col-lg-6 col-md-12">
          <img src={imag4} alt="cairo-img" className="w-100"  height={300}/>
          </div>
          <div className=" col-lg-6 col-md-12">
          <h5 className="text-main fw-bold ">Aswan</h5>
          <p>           Nile islands around the city extended from the high dam to the north of Edfu, some people of the Nubian villages and islands counts on farming and handmade items as a source of living and  some already took place in governmental jobs, not only the main city of Aswan that has full services but also, the surrounding islands provided by hospitals, schools, and transportations, some of the islands are uninhabited because it's considered to be an archaeological areas like the crocodile island and elephantine island which was a region linking the South and the North in the trade between  Egypt and the rest of Africa. Aswan also considered as the main gate of southern Egypt beside Luxor city and a huge economical source for the country     
          </p>
          </div>
          <div className=" col-lg-6 col-md-12">
          <img src={imag5} alt="cairo-img" className="w-100"  height={300}/>
          </div>
        </div>
      </div>
    </>
  );
}

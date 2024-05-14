import React, { useContext } from "react";
import Slider from "react-slick";
import CardItem from "./CardItem";
import { Context } from "./Context/Context";
import { NavLink } from "react-router-dom";

export default function CardSlider() {
  const { forYou, topPlaces, mostPopular } = useContext(Context);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,

        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="d-flex justify-content-between mt-4 text-main">
        <h2 >For You</h2>
        <NavLink className='text-main fw-bold '  to={`/forAll/`}>See All</NavLink>

        </div>

          <Slider {...settings}>
            {forYou.map((el) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={el.id}>
                {
                  <CardItem
                    srcImg={el.img}
                    name={el.name}
                    id={el.id}
                    location={el.location}
                    link={el.link}
                    title="dataDetails"
                    el={el}
                  />
                }
              </div>
            ))}
          </Slider>

          <div className="d-flex justify-content-between mt-4 text-main">
          <h2 >Top Places</h2>
          <NavLink className='text-main fw-bold '  to={`/topPlaces/`}>See All</NavLink>
        </div>
          <Slider {...settings}>
            {topPlaces.map((el) => (
              <div className="col-lg-4 col-md-6 col-sm-12 " key={el.id}>
                {
                  <CardItem
                    srcImg={el.img}
                    name={el.name}
                    id={el.id}
                    location={el.location}
                    link={el.link}
                    title="dataDetails"
                    el={el}
                  />
                }
              </div>
            ))}
          </Slider>
          <h2 className="mt-4 text-main">Most Popular</h2>

          {mostPopular.map((el) => (
            <div className="col-lg-4 col-md-6 col-sm-12  "  key={el.id}>
              {
                <CardItem
                  srcImg={el.img}
                  name={el.name}
                  id={el.id}
                  location={el.location}
                  link={el.link}
                  title="dataDetails"
                  el={el}
                />
              }
            </div>
          ))}
          <NavLink className=' text-main text-center fw-bold mb-4 '  to={`/mostPopular/`}>See All</NavLink>

        </div>
      </div>
    </div>
  );
}

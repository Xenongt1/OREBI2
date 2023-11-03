import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Product from "../Products/Product";
import {Link} from "react-router-dom";
import Hosdet from "../../../pages/HostelDet/Hosdet";
import useFetch from "../../../useFetch";
const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


const {data, isLoaded, error, setData} = useFetch("http://localhost:8000/data");
  return (
    <div className="w-full pb-14 mx-0">
      <Heading heading="New Arrivals" />
      {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <Slider {...settings}>
            {isLoaded ? (
              <div className="text-2xl font-bold text-gray-800">Loading...</div>
            ) : (
              data &&
              data.map((data) => (
                <Link to={`/hostel/${data.id}`} key={data.id}>
                  <Product data={data} />
                </Link>
              ))
            )}
          </Slider>
        )}
    </div>
  );
};

export default NewArrivals;

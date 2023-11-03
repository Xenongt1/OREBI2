import React from "react";
import { Link } from "react-router-dom";

const Sale = () => {
  const customHeight = "935px"; // Adjust the height as needed

  const customStyle = {
    height: customHeight,
  };

  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/hostel/1">
          <div style={customStyle} className="w-full object-cover">
            <img
              className="w-full h-full object-cover"
              src="/houseImages/house1.jpg"
              alt="Sale 1"
            />
          </div>
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/hostel/2">
            <img
              className="h-full w-full object-cover"
              src="/houseImages/house2.jpeg"
              alt="Sale 2"
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/hostel/3">
            <img
              className="h-full w-full object-cover"
              src="/houseImages/house3.jpg"
              alt="Sale 3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;

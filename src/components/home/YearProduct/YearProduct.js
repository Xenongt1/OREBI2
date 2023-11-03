import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
  return (
    <Link to="/shop" >
      <div className="w-full h-100 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
       <img src="/UMATBANNER.png" style={{}}/>
      </div>
    </Link>
  );
};

export default YearProduct;

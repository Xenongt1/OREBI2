import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  //   const [selected, setSelected] = useState("");
  const [girdViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);
  
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* Left Part */}
      <div className="flex items-center gap-4">
        
        
      </div>
      {/* Right Part */}
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
         
        </div>
        <div className="flex items-center gap-2 text-[#767676] relative">
        
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;

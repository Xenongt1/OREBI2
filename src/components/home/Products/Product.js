import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = ({data}) => {
  
  return (
    <div className="w-full relative group">
     
            <div
              key={data.id}
              className=" p-4 bg-white rounded-lg transform transition duration-300 hover:translate-y-[-5px] hover:scale-105 border border-gray-200"
            >
              <img
                src={data.image}
                alt={data.hostel}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-xl font-semibold text-gray-800">{data.hostel}</p>
                <p className="text-lg font-medium text-gray-600">Price: ${data.price}</p>
              </div>
            </div>
         
    </div>
  );
};

export default Product;

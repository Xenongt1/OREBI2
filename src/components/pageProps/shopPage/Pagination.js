import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import useFetch from "../../../useFetch";
import { Link } from "react-router-dom";
const items = paginationItems;

function Items({ currentItems }) {
  const { data, isLoaded, error, setData } = useFetch("http://localhost:2000/data");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
      {error ? (
          <div className="text-red-500">{error}</div>
        ) : (<>
      
            {isLoaded ? (
              <div className="text-2xl font-bold text-gray-800">Loading...</div>
            ) : (
      data && data.map((data) => (
        <Link to={`/hostel/${data.id}`} key={data.id}>
        <Product data={data} />
        </Link>
      )))} </>)}
    </div>
  );
}
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div className="max-w-container mx-auto flex justify-center">
      <Items currentItems={currentItems} />
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
        />
        <p className="text-base font-normal text-lightText">
          
        </p>
      </div>
    </div>
  );
};

export default Pagination;



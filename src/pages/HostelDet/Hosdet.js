import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../useFetch';

const Hosdet = () => {
  const { id } = useParams();
  const { data, isLoaded, error, setData } = useFetch('http://localhost:8000/data/' + id);

  // Function to handle the payment process when the "Pay" button is clicked
  const handlePayment = () => {
    // Implement your payment logic here
    // For example, you can redirect the user to a payment gateway.
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-4xl p-8 rounded-lg shadow-md bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Hostel Details</h1>
        </div>
        {data && error ? (
          <div className="text-red-500 text-center mt-4">{error}</div>
        ) : (
          <>
            {isLoaded ? (
              <div className="text-2xl font-bold text-gray-800 text-center mt-4">Loading...</div>
            ) : (
              <>
                <img
                  src={data.image}
                  alt={data.hostel}
                  className="w-full h-auto rounded-t-lg shadow-lg"
                />
                <h2 className="text-2xl font-bold text-gray-800 mt-6">Hostel Name: {data.hostel}</h2>
                <h2 className="text-2xl font-bold text-gray-800">Number of Rooms: {data['number-of-rooms']}</h2>
                <p className="text-lg text-gray-600 mt-2">About: {data.about}</p>
                <p className="text-lg text-gray-600">Location: {data.location}</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">Price: ${data.price}</h2>
                <button
                  onClick={handlePayment}
                  className="mt-4 px-4 py-2 bg-primeColor text-white hover:bg-black duration-300 rounded"
                >
                  Pay
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Hosdet;

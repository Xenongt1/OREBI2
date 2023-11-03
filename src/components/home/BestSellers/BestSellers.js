import React, { useEffect, useState } from 'react';

function AnimatedCounter({ initialValue, targetValue, duration, backgroundColor }) {
  const [current, setCurrent] = useState(initialValue);

  useEffect(() => {
    const increment = (targetValue - initialValue) / duration;
    const handle = setInterval(() => {
      if (current < targetValue) {
        setCurrent(current + increment);
      } else {
        clearInterval(handle);
        setCurrent(targetValue);
      }
    }, 1);

    return () => {
      clearInterval(handle);
    };
  }, [current, targetValue, duration, initialValue]);

  const bgColorClass = `bg-${backgroundColor}-300`; // Generate the background color class

  return (
    <div className={`text-4xl text-black text-center font-bold p-8 sm:p-12 rounded-md ${bgColorClass} w-36 sm:w-42 m-4 sm:m-6 rounded-lg`}>
      {Math.round(current)}
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col sm:flex-row mx-auto items-center min-h-screen justify-center bg-gray-200 content-center">
      <div className="flex items-center flex-wrap">
        <AnimatedCounter initialValue={0} targetValue={300} duration={200} backgroundColor="green" />
        <AnimatedCounter initialValue={0} targetValue={780} duration={200} backgroundColor="blue" />
        <AnimatedCounter initialValue={0} targetValue={500} duration={200} backgroundColor="orange" />
      </div>
    </div>
  );
}

export default App;

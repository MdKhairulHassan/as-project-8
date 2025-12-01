import React from 'react';

const Counter = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20">
        <div className="max-w-11/12 mx-auto">
          <div>
            <h1 className="font-bold text-5xl text-white text-center">
              Trusted by Millions, Built for You
            </h1>
          </div>
          <div className="flex pt-10 justify-around">
            <div className="text-center">
              <p className="text-sm text-[#ffffffc9]">Total Downloads</p>
              <h6 className="font-extrabold text-6xl text-white py-5">29.6M</h6>
              <p className="text-sm text-[#ffffffc9]">
                21% more than last month
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-[#ffffffc9]">Total Reviews</p>
              <h6 className="font-extrabold text-6xl text-white py-5">906K</h6>
              <p className="text-sm text-[#ffffffc9]">
                46% more than last month
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-[#ffffffc9]">Active Apps</p>
              <h6 className="font-extrabold text-6xl text-white py-5">132+</h6>
              <p className="text-sm text-[#ffffffc9]">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

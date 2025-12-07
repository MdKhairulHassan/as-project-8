// import React, { useEffect, useState } from 'react';
// import { use } from 'react';
import AppsCards from '../AppsCards/AppsCards';
import { Link } from 'react-router';

const AppsData = ({ data }) => {
  const appsData = data;
  // console.log(appsData);
  // ======================================================
  // const [allApps, setAllApps] = useState([]);
  // useEffect(() => {
  //   fetch('sortAppsData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setAllApps(data);
  //     });
  // }, [allApps]);

  // ======================================================

  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-11/12 mx-auto py-28">
        <div className="text-center pb-10">
          <h1 className="font-bold text-5xl text-[#001931]">Trending Apps</h1>
          <p className="text-xl text-[#627382] mt-6">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex justify-center">
          <div className="pb-10 grid grid-cols-4 gap-10 max-[1116px]:grid-cols-3 max-[1116px]:gap-5 max-[843px]:grid-cols-2 max-[550px]:grid-cols-1">
            {appsData.map((data, index) => {
              // Calculate the total number of elements
              const totalElements = appsData.length;

              // Determine if the current element is one of the last two elements
              const isLastTwo = index >= totalElements - 2;

              // Apply a class that hides the element at a specific breakpoint (e.g., medium screens and up)
              // The element will be visible on mobile, but hidden on 'md' screens and larger.
              const visibilityClass = isLastTwo ? 'max-[1116px]:hidden' : '';

              return (
                <AppsCards
                  key={data.id}
                  data={data}
                  // Apply the responsive class directly to the wrapping element
                  className={visibilityClass}
                ></AppsCards>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <Link
            to={'/allApps'}
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#b885ff] hover:to-[#6d2fff] btn text-white text-lg font-semibold transition duration-300"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppsData;

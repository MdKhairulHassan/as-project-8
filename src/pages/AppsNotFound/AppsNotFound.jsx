import React from 'react';
import errorImg from '../../assets/App-Error.png';

const AppsNotFound = () => {
  return (
    <div className="flex justify-center py-20">
      <div>
        <div className="flex justify-center">
          <img src={errorImg} alt="" />
        </div>
        <h6 className="text-[#001931] font-semibold text-5xl text-center pt-20">
          Oops, APP NOT FOUND!
        </h6>
        <p className="text-xl text-[#627382] text-center pt-6">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex justify-center pt-5">
          <a
            href={'/allApps'}
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn px-10 py-5 text-white text-sm font-semibold"
          >
            Go Back!
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppsNotFound;

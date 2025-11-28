import React from 'react';
import errorImg from '../../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div className="py-32 bg-[#F5F5F5]">
      <div className="max-w-11/12 h-[500hv] mx-auto">
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center">
              <img src={errorImg} alt="" />
            </div>
            <h6 className="text-[#001931] font-semibold text-5xl text-center pt-20">
              Oops, page not found!
            </h6>
            <p className="text-xl text-[#627382] text-center pt-6">
              The page you are looking for is not available.
            </p>
            <div className="flex justify-center pt-5">
              <a className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn px-10 py-5 text-white text-sm font-semibold">
                Go Back!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

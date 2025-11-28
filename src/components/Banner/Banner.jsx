import React from 'react';
import googleImg from '../../assets/google-play-store.png';
import appImg from '../../assets/app-store.png';
import heroImg from '../../assets/hero.png';

const Banner = () => {
  return (
    <>
      <div className="pt-20 bg-[#F5F5F5]">
        <div className="max-w-11/12 mx-auto">
          <h1 className="text-[#001931] font-bold text-7xl text-center px-60 leading-20">
            We Build{' '}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text border-b-2 text-transparent">
              Productive
            </span>{' '}
            Apps
          </h1>
          <p className="text-center text-[#627382] text-xl leading-8 px-25">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center gap-4 pt-7">
            <button className="btn">
              <img className="w-6" src={googleImg} alt="" />{' '}
              <span className="font-semibold text-xl text-[#001931]">
                Google Play
              </span>
            </button>
            <button className="btn">
              <img className="w-6" src={appImg} alt="" />
              <span className="font-semibold text-xl text-[#001931]">
                App Store
              </span>
            </button>
          </div>
          <div className="flex justify-center pt-10">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>

      {/* counter part */}
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
    </>
  );
};

export default Banner;

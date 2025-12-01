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
              <a
                href="https://play.google.com/store/games?device=phone&hl=en"
                target="_blank"
              >
                <span className="font-semibold text-xl text-[#001931]">
                  Google Play
                </span>
              </a>
            </button>
            <button className="btn">
              <img className="w-6" src={appImg} alt="" />
              <a href="https://www.apple.com/app-store/" target="_blank">
                <span className="font-semibold text-xl text-[#001931]">
                  App Store
                </span>
              </a>
            </button>
          </div>
          <div className="flex justify-center pt-10">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

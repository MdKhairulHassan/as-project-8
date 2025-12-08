import React from 'react';
import googleImg from '../../assets/google-play-store.png';
import appImg from '../../assets/app-store.png';
import heroImg from '../../assets/hero.png';
import { FaGithub } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
      <div className="pt-20 bg-[#F5F5F5]">
        <div className="max-w-11/12 mx-auto">
          <h1 className="text-[#001931] font-bold text-7xl text-center px-60 leading-20 max-[1162px]:px-45 max-[1031px]:px-30 max-[900px]:px-15 max-[769px]:px-0 max-[638px]:text-6xl max-[532px]:text-5xl max-[532px]:leading-13 max-[425px]:text-4xl">
            We Build{' '}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text border-b-2 text-transparent">
              Productive
            </span>{' '}
            Apps
          </h1>
          <p className="text-center text-[#627382] text-xl leading-8 px-25 pt-6 max-[675px]:px-0">
            At Innovated Apps Store , we craft innovative apps designed to make
            everyday life simpler, smarter, and more exciting. Our goal is to
            turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className="max-[453px]:flex max-[453px]:justify-center pt-6 hidden">
            <a
              href="https://github.com/MdKhairulHassan"
              target="_blank"
              className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#b885ff] hover:to-[#6d2fff] btn text-white text-lg font-semibold transition duration-300"
            >
              <FaGithub />
              Contribute
            </a>
          </div>
          <div className="flex justify-center gap-4 pt-7 max-[374px]:flex-col">
            <button className="btn border-3 bg-white hover:bg-gray-300">
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
            <button className="btn border-3 bg-white hover:bg-gray-300">
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

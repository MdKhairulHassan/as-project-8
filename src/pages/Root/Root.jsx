import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import logoImg from '../../assets/logo-rb.png';

const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div>
      <div className="bg-white">
        <Navbar></Navbar>
      </div>
      <div>
        {/* Global Loading Animation */}
        {isLoading && (
          <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
            {/* <span className="loading loading-bars loading-xl w-[100vh] h-[101vh]"></span> */}
            <div className="flex items-center">
              <p className="text-7xl text-[#D9D9D9]">L </p>
              <img src={logoImg} alt="" className="w-16 h-16 animate-spin" />
              <p className="text-7xl text-[#D9D9D9]"> a d i n g...</p>
            </div>
          </div>
        )}
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

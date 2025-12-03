import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

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
            <span className="loading loading-bars loading-xl w-[100vh] h-[101vh]"></span>
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

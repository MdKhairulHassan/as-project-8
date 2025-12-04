import React from 'react';
import { toast } from 'react-toastify';

const UninstalledAppCard = ({ singleApp }) => {
  const {
    image,
    title,
    // companyName,
    id,
    // description,
    size,
    // reviews,
    ratingAvg,
    downloads,
    // ratings,
  } = singleApp;

  function downloadsShortCalculation(dwn) {
    return dwn >= 1e15
      ? (dwn / 1e15).toFixed(1).replace(/\.0$/, '') + 'Q'
      : dwn >= 1e12
      ? (dwn / 1e12).toFixed(1).replace(/\.0$/, '') + 'T'
      : dwn >= 1e9
      ? (dwn / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'
      : dwn >= 1e6
      ? (dwn / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
      : dwn >= 1e3
      ? (dwn / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
      : dwn.toString();
  }

  const uninstallApp = id => {
    const clickedCards = JSON.parse(localStorage.getItem('clickedCards')) || {};

    delete clickedCards[id]; // remove installed state

    localStorage.setItem('clickedCards', JSON.stringify(clickedCards));

    // notify all pages
    window.dispatchEvent(new Event('clickedCardsUpdated'));

    toast.success('App uninstalled!');
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl shadow flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* App Icon */}
        <div className="w-14 h-14 bg-white rounded-lg">
          <img src={image} alt="app-icon" />
        </div>

        {/* Texts */}
        <div>
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>

          <div className="flex items-center gap-4 mt-1">
            {/* Downloads */}
            <div className="flex items-center text-sm text-emerald-600 font-medium">
              <span>⬇</span>
              <span className="ml-1">
                {downloadsShortCalculation(downloads)}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center text-sm text-orange-500 font-medium">
              <span>⭐</span>
              <span className="ml-1">
                {downloadsShortCalculation(ratingAvg)}
              </span>
            </div>

            {/* Size */}
            <span className="text-sm text-gray-500">{size} MB</span>
          </div>
        </div>
      </div>

      {/* Uninstall Button */}
      <button
        onClick={() => uninstallApp(id)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg transition cursor-pointer"
      >
        Uninstall
      </button>
    </div>
  );
};

export default UninstalledAppCard;

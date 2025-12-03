import React, { useEffect, useState } from 'react';
import iconDownload from '../../assets/icon-downloads.png';
import iconRatings from '../../assets/icon-ratings.png';
import iconReview from '../../assets/icon-review.png';
import { useLoaderData, useParams } from 'react-router';
import RatingsChart from '../../components/RatingsChart/RatingsChart';

// =================================== swal for alert message
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
// ===================================

const AppDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const appId = parseInt(id);
  const data = useLoaderData();
  // console.log(data);
  const singleApp = data.find(app => app.id === appId);

  console.log(singleApp);
  const {
    image,
    title,
    companyName,
    // id,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
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

  // // if necessary you can use it
  // const ratArray = ratings.map(rating => ({
  //   name: rating.name,
  //   count: downloadsShortCalculation(rating.count),
  // }));
  // console.log(ratArray);

  // const [isInstall, setIsInstall] = useState(false);

  // Load from localStorage or create default {1:false, 2:false ...}
  const [clickedCards, setClickedCards] = useState(() => {
    return JSON.parse(localStorage.getItem('clickedCards')) || {};
  });

  // Save anytime clickedCards updates
  useEffect(() => {
    localStorage.setItem('clickedCards', JSON.stringify(clickedCards));
  }, [clickedCards]);

  // Listen for changes from other pages
  useEffect(() => {
    const sync = () => {
      const updated = JSON.parse(localStorage.getItem('clickedCards')) || {};
      setClickedCards(updated);
    };

    window.addEventListener('clickedCardsUpdated', sync);

    return () => window.removeEventListener('clickedCardsUpdated', sync);
  }, []);

  // const toggleCard = id => {
  //   setClickedCards(prev => ({
  //     ...prev,
  //     [id]: !prev[id], // toggle true/false
  //   }));
  // };

  const installApp = id => {
    setClickedCards(prev => ({
      ...prev, // ...prev means previous value spread
      [id]: true, // install only (NO toggle)
    }));

    // for alert message
    MySwal.fire({
      title: 'Thanks to install it!',
      text: 'You clicked the install now button!',
      icon: 'success',
    });
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-11/12 mx-auto py-14">
        <div>
          <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
            {/* Header Section */}
            <div className="flex items-start gap-6">
              <div className="w-75 h-70 rounded-2xl bg-gray-100 flex items-center justify-center text-5xl">
                <img className="w-full h-full rounded-3xl" src={image} alt="" />
              </div>

              <div className="flex-1 space-y-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="font-medium">
                  Developed by
                  <span className="text-[#632EE3]"> {companyName}</span>
                </p>

                {/* Stats Cards */}
                <div className="flex items-center gap-10 mt-4 pt-4 border-t border-[#00193140]">
                  <div className="">
                    <img className="pb-3" src={iconDownload} alt="" />
                    <p className="text-green-600 text-sm font-semibold py-1">
                      Downloads
                    </p>
                    <p className="text-2xl font-bold">
                      {downloadsShortCalculation(downloads)}
                    </p>
                  </div>

                  <div className="">
                    <img className="pb-3" src={iconRatings} alt="" />
                    <p className="text-orange-500 text-sm font-semibold py-1">
                      Average Ratings
                    </p>
                    <p className="text-2xl font-bold">{ratingAvg}</p>
                  </div>

                  <div className="">
                    <img className="pb-3" src={iconReview} alt="" />
                    <p className="text-purple-600 text-sm font-semibold py-1">
                      Total Reviews
                    </p>
                    <p className="text-2xl font-bold">
                      {downloadsShortCalculation(reviews)}
                    </p>
                  </div>
                </div>

                {/* Install Button */}
                {/* <button
                  onClick={() => toggleCard(id)}
                  className={`font-semibold px-6 py-2 rounded-xl mt-4 btn ${
                    clickedCards[id] ? 'bg-green-600' : 'bg-amber-600gray'
                  }`}
                >
                  {clickedCards[id] ? 'Installed' : `Install Now (${size} MB)`}
                </button> */}

                <button
                  disabled={clickedCards[id] === true}
                  onClick={() => installApp(id)}
                  className={`font-semibold px-6 py-2 rounded-xl mt-4 btn ${
                    clickedCards[id]
                      ? 'bg-green-600 cursor-not-allowed text-gray-300'
                      : 'bg-[#00D390]'
                  }`}
                >
                  {clickedCards[id] ? 'Installed' : `Install Now (${size} MB)`}
                </button>
              </div>
            </div>

            {/* RatingChart */}
            <div className="space-y-4 border-t border-[#00193140] pt-5">
              <h2 className="text-2xl font-semibold text-[#001931]">Ratings</h2>
              <div>
                <RatingsChart ratings={ratings}></RatingsChart>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 border-t border-[#00193140] pt-5">
              <h2 className="text-2xl font-semibold text-[#001931]">
                Description
              </h2>

              <p className="text-[#627382] leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;

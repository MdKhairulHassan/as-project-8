import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { IoMdArrowDropdown } from 'react-icons/io';
import UninstalledAppCard from '../../components/UninstalledAppCard/UninstalledAppCard';

const Installation = () => {
  const [appList, setAppList] = useState([]);
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const handler = () => {
      const clickedCards =
        JSON.parse(localStorage.getItem('clickedCards')) || {};
      const allIds = Object.keys(clickedCards).map(id => parseInt(id));

      const filteredApps = data.filter(app => allIds.includes(app.id));
      setAppList(filteredApps);
    };
    // First load
    handler();

    // Listen for uninstall events
    window.addEventListener('clickedCardsUpdated', handler);

    return () => window.removeEventListener('clickedCardsUpdated', handler);
  }, [data]);

  const [sort, setSort] = useState('');
  const handleSort = type => {
    setSort(type);
    if (type === '▼') {
      const sortedById = [...appList].sort((a, b) => a.id - b.id);
      setAppList(sortedById);
    }
    if (type === ': downloads') {
      const sortedByDownloads = [...appList].sort(
        (a, b) => a.downloads - b.downloads
      );
      setAppList(sortedByDownloads);
    }
    if (type === ': ratings') {
      const sortedByDownloads = [...appList].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setAppList(sortedByDownloads);
    }
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-11/12 mx-auto py-20">
        <div className="text-center pb-20">
          <h1 className="font-bold text-5xl text-[#001931] max-[351px]:text-4xl max-[263px]:text-3xl max-[219px]:text-2xl">
            Your Installed Apps
          </h1>
          <p className="text-xl text-[#627382] mt-6">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex items-center justify-between px-3 max-[370px]:px-0 max-[370px]:flex-col max-[370px]:gap-y-3">
          <h5 className="font-semibold text-[#001931] text-2xl max-[212px]:text-xl ">
            ({appList.length}) Installed Apps
          </h5>
          <div>
            {/* <label className="input bg-[#F5F5F5] border border-[#bfbfbf] rounded-sm px-3 py-2">
              <input type="search" placeholder="Search Apps" />
            </label> */}

            <div className="dropdown dropdown-end max-[355px]:dropdown-center">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-[#F5F5F5] border border-[#bfbfbf] rounded-sm"
              >
                <p className="text-[#627382] flex items-center gap-x-1">
                  Sort By{' '}
                  {sort ? (
                    sort
                  ) : (
                    <IoMdArrowDropdown className="text-[#627382] text-2xl" />
                  )}
                </p>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-1 max-[355px]:w-full"
              >
                <li>
                  <a onClick={() => handleSort('▼')}>default</a>
                </li>
                <li>
                  <a onClick={() => handleSort(': downloads')}>Downloads</a>
                </li>
                <li>
                  <a onClick={() => handleSort(': ratings')}>Ratings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-5 pt-25">
          {appList.map(app => (
            <UninstalledAppCard
              key={app.id}
              singleApp={app}
            ></UninstalledAppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;

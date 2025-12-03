import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import AppsCards from '../../components/AppsCards/AppsCards';
import errorImg from '../../assets/App-Error.png';
import { useLoaderData } from 'react-router';

const AllApps = () => {
  const data = useLoaderData();
  // console.log(data);
  const [allApps, setAllApps] = useState([]);
  const [originalApps, setOriginalApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // fetch('appsData.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     setAllApps(data);
    //     setOriginalApps(data);
    //     // setLoading(false);
    //   });

    // Solve cascading Renders Problem
    const forCascadingRendersProblem = () => (
      setAllApps(data), setOriginalApps(data)
    );
    forCascadingRendersProblem();
  });

  // Debounce search filtering
  useEffect(() => {
    // setLoading(true); // Cascading Renders Problem
    const forCascadingRendersProblem = () => setLoading(true); // Solve cascading Renders Problem
    forCascadingRendersProblem();

    const delay = setTimeout(() => {
      if (search.trim() === '') {
        setAllApps(originalApps);
        setLoading(false);
        return;
      }

      const filtered = originalApps.filter(app =>
        app.title
          .trim()
          .replace(/ /g, '')
          .toLowerCase()
          .includes(search.trim().replace(/ /g, '').toLowerCase())
      );

      setAllApps(filtered);
      setLoading(false);
    }, 400); // 400ms delay for smoother UI

    return () => clearTimeout(delay);
  }, [search, originalApps]);

  const handleSearchApps = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-11/12 mx-auto py-20">
        <div className="text-center pb-20">
          <h1 className="font-bold text-5xl text-[#001931]">
            Our All Applications
          </h1>
          <p className="text-xl text-[#627382] mt-6">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex items-center justify-between px-3">
          <h5 className="font-semibold text-2xl">
            ({allApps.length}) Apps Found
          </h5>
          <div>
            <label className="input bg-[#F5F5F5] border border-[#bfbfbf] rounded-sm px-3 py-2">
              <CiSearch />
              <input
                type="search"
                placeholder="Search Apps"
                onChange={handleSearchApps}
              />
            </label>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner text-info w-[100vh] h-[101vh]"></span>
          </div>
        ) : allApps.length === 0 ? (
          <div className="flex justify-center pt-30">
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
                <a
                  href={'/allApps'}
                  className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn px-10 py-5 text-white text-sm font-semibold"
                >
                  Go Back!
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="py-10 grid grid-cols-4 gap-10">
              {allApps.map(data => (
                <AppsCards key={data.id} data={data} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;

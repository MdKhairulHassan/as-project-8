import React, { lazy, Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import Counter from '../../components/Counter/Counter';
// import AppsData from '../../components/AppsData/AppsData';
const AppsData = lazy(() => import('../../components/AppsData/AppsData'));
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();

  // const appPromise = fetch('./sortAppsData.json').then(res => res.json());
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <span className="loading loading-spinner text-error w-[100vh] h-[101vh]"></span>
          </div>
        }
      >
        <AppsData data={data}></AppsData>
      </Suspense>
    </div>
  );
};

export default Home;

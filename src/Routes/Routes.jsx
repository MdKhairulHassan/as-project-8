import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AppsNotFound from '../pages/AppsNotFound/AppsNotFound';
const Home = lazy(() => import('../pages/Home/Home'));
const Installation = lazy(() => import('../pages/Installation/Installation'));
const AllApps = lazy(() => import('../pages/AllApps/AllApps'));
const AppDetails = lazy(() => import('../pages/AppDetails/AppDetails'));

// import Home from '../pages/Home/Home';
// import Installation from '../pages/Installation/Installation';
// import Installation from '../pages/Installation/installation'; // wrong
// import AllApps from '../pages/AllApps/AllApps';
// import AppDetails from '../pages/AppDetails/AppDetails';

// ============================================================
// const usersPromiseAll = fetch('/appsData.json').then(res => res.json());
// const usersPromiseSort = fetch('/sortAppsData.json').then(res => res.json());

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        // Component: Home,
        loader: () => fetch('/sortAppsData.json'),
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center">
                <span className="loading loading-spinner text-error w-[100vh] h-[101vh]"></span>
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/allApps',
        loader: () => fetch('/appsData.json'),
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center">
                <span className="loading loading-spinner text-error w-[100vh] h-[101vh]"></span>
              </div>
            }
          >
            <AllApps />
          </Suspense>
        ),
      },
      {
        path: '/installation',
        loader: () => fetch('/appsData.json'),
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center">
                <span className="loading loading-spinner text-error w-[100vh] h-[101vh]"></span>
              </div>
            }
          >
            <Installation />
          </Suspense>
        ),
      },
      // {
      //   path: '/appDetails/:id',
      //   loader: () => fetch('/appsData.json'),
      //   element: (
      //     <Suspense
      //       fallback={
      //         <div className="flex justify-center">
      //           <span className="loading loading-spinner text-error w-[100vh] h-[101vh]"></span>
      //         </div>
      //       }
      //     >
      //       <AppDetails />
      //     </Suspense>
      //   ),
      // },

      {
        path: '/appDetails/:id',
        loader: async ({ params }) => {
          const data = await fetch('/appsData.json').then(res => res.json());
          const id = Number(params.id); // convert URL id → number
          const matchedApp = data.find(app => app.id === id);

          if (!matchedApp) {
            throw new Response('App Not Found', { status: 404 });
          }

          return matchedApp; // return single object
        },
        errorElement: <AppsNotFound />,
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center">
                <span className="loading loading-spinner text-error w-[100vh] h-[101vh]"></span>
              </div>
            }
          >
            <AppDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Installation from '../pages/Installation/installation';
import AllApps from '../pages/AllApps/AllApps';
// import AppDetails from '../pages/AppDetails/AppDetails';
const AppDetails = lazy(() => import('../pages/AppDetails/AppDetails'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: '/allApps',
        Component: AllApps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/appsData.json'),
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

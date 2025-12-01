// import React, { useEffect, useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import errorImg from '../../assets/App-Error.png';
// import AppsCards from '../../components/AppsCards/AppsCards';
// // // const AppsCards = lazy(() => import('../../components/AppsCards/AppsCards')); // here the Suspense will work for lazy loading component. but not for fetch. that's why it's a wrong code combination to use Suspense here like this.

// const AllApps = () => {
//   const [allApps, setAllApps] = useState([]);
//   const [originalApps, setOriginalApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetch('appsData.json')
//       .then(res => res.json())
//       .then(data => {
//         setAllApps(data);
//         setOriginalApps(data); // backup
//         setLoading(false);
//       });
//   }, []);

//   const handleSearchApps = e => {
//     const value = e.target.value.trim().replace(/ /g, '').toLowerCase();
//     // setSearch(value);

//     if (value.trim() === '') {
//       setAllApps(originalApps); // reset full list
//       return;
//     }

//     const filtered = originalApps.filter(app =>
//       app.title.trim().replace(/ /g, '').toLowerCase().includes(value)
//     );

//     setAllApps(filtered);
//   };

//   return (
//     <div className="bg-[#F5F5F5]">
//       <div className="max-w-11/12 mx-auto py-20">
//         <div className="flex items-center justify-between">
//           <h5 className="font-semibold text-2xl">
//             {allApps.length} Apps Found
//           </h5>

//           <div className="flex items-center border border-[#bfbfbf] rounded-sm px-3 py-2 gap-3">
//             <CiSearch />
//             <CiSearch />
//             <input
//               type="search"
//               placeholder="search Apps"
//               onChange={handleSearchApps}
//               className="input outline-none"
//             />
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex justify-center">
//             <span className="loading loading-spinner text-info w-[100vh] h-[101vh]"></span>
//           </div>
//         ) : allApps.length === 0 ? (
//           <div className="flex justify-center pt-30">
//             <div>
//               <div className="flex justify-center">
//                 <img src={errorImg} alt="" />
//               </div>
//               <h6 className="text-[#001931] font-semibold text-5xl text-center pt-20">
//                 Oops, page not found!
//               </h6>
//               <p className="text-xl text-[#627382] text-center pt-6">
//                 The page you are looking for is not available.
//               </p>
//               <div className="flex justify-center pt-5">
//                 <a className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn px-10 py-5 text-white text-sm font-semibold">
//                   Go Back!
//                 </a>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="py-10 grid grid-cols-4 gap-y-10">
//             {allApps.map(data => (
//               <AppsCards key={data.id} data={data} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllApps;

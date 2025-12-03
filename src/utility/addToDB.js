// const getStoredBook = () => {
//   const storedAppsSTR = localStorage.getItem('appList');
//   if (storedAppsSTR) {
//     const storedAppData = JSON.parse(storedAppsSTR);
//     return storedAppData;
//   } else {
//     return [];
//   }
// };

// const addToStoredDB = id => {
//   const storedAppData = getStoredBook();

//   if (storedAppData.includes(id)) {
//     alert('this id is already exist');
//   } else {
//     storedAppData.push(id);
//     const data = JSON.stringify(storedAppData);
//     localStorage.setItem('appList', data);
//     // console.log(storedAppData);
//   }
// };

// export { addToStoredDB, getStoredBook };

import { Link } from 'react-router';

const AppsCards = ({ data, className }) => {
  // console.log(data);
  const {
    image,
    title,
    // companyName,
    id,
    // description,
    // size,
    // reviews,
    ratingAvg,
    downloads,
    // ratings,
  } = data;

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

  return (
    <Link to={`/appDetails/${id}`} className={`${className}`}>
      <div className="w-64 p-3 bg-white shadow-md rounded-xl">
        {/* Image placeholder */}
        <div className="w-full h-50 bg-gray-300 rounded-md">
          <img src={image} alt="" className="w-full h-full" />
        </div>

        {/* Title */}
        <h3 className="mt-3 text-sm font-semibold text-gray-800">{title}</h3>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-2 text-xs">
          <span className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-md">
            📥 {downloadsShortCalculation(downloads)}
          </span>
          <span className="flex items-center gap-1 bg-orange-100 text-orange-500 px-2 py-1 rounded-md">
            ⭐ {ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppsCards;

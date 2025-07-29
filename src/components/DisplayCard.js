import {classnames} from 'tailwindcss-classnames';
import logo512 from "../assets/images/logo512.png";

function DisplayCard({ shadow, textColor, bgColor, hover, children }) {
  return (
    <div className={classnames(`max-w-xs rounded-xl overflow-hidden bg-${bgColor} my-6 mx-2  shadow-${shadow} text-${textColor} hover:${hover} transform -skew-x-3`)}>
      <img className="w-full" src={logo512} alt="React Logo" />
      <div className="px-6 py-4">
        <div className="font-sans font-black text-xl mb-2">The Coldest Sunset</div>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-bold mr-2">#mountains</span>
        <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-bold mr-2">#snow</span>
        <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-bold mr-2">#winter</span>
      </div>
      {children}
    </div>
  );
};

export default DisplayCard;

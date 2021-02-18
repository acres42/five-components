import React from "react";
import {classnames} from 'tailwindcss-classnames';

function Button ({size, bgColor, hover, textColor, shadow, children}) {
  return (
      <button className={classnames(`rounded focus:ring-2 bg-${bgColor} font-sans font-black hover:${hover} text-${textColor} py-2 px-4 text-${size} shadow-${shadow} transform -skew-x-6`)}>
      {children}
  </button>
  )
};


export default Button;

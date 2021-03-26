import React, { useState } from 'react';
import {classnames} from 'tailwindcss-classnames';

const Carousel = (props) => {

    const [slides] = useState([
        {
            source: "/five-components/images/badkitty1.jpg",
            title: "Evil"
        },
        {
            source: "/five-components/images/badkitty2.jpg",
            title: "No Good"
        },
        {
            source: "/five-components/images/badkitty3.jpg",
            title: "Rotten"
        }
    ]);

    // SET CAROUSEL DEFAULTS
    let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
    let currentSlide = slides[currentPosition]; // variable index value we can reference later

    const arrowRightClick = () => {
        currentPosition !== slides.length -1 ? // Check index length
        setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
        currentSlide = slides[currentPosition];
    }

    const arrowLeftClick = () => {
        currentPosition !== 0 ? // Check index length
        setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
        currentSlide = slides[currentPosition];
    }

    return (
        <div className={classnames(`max-w-xs rounded-xl overflow-hidden bg-${props.bgColor} my-6 mx-2  shadow-${props.shadow} transform -skew-x-3`)}>
            <div>
                <div>
                    <div>
                        <img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="w-full rounded-lg" />
                        <div className="flex items-center py-2">
                            <div className="flex-1 pl-10" id="arrow-left" onClick={arrowLeftClick}>
                            <svg className="fill-current text-cyan-500 transition duration-300 ease-in-out hover:text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20"><polygon points="3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9"/></svg>
                            </div>
                            <div className="flex-1 font-bold pr-5">{currentSlide.title}</div>
                            <div
                            className="flex-1"  id="arrow-right" onClick={arrowRightClick}><svg className=" fill-current text-cyan-500 transition duration-300 ease-in-out hover:text-emerald-600" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20"><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;

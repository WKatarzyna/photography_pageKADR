import React, {useState} from "react";

import './Slider.css';


const Slider = ({images}) => {


    const [index, setIndex] = useState(0);

    const slideRight = () => {
        setIndex((index + 1) % images.length);
    };

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(nextIndex);
        }
    };

    return (
        images.length > 0 && (
            <>
            <div className={'slide_container'}>
                <div className={'slide'} style={ {backgroundImage: 'linear-gradient(' + ' rgba(0, 0, 0, 0.5),' + 'rgba(0, 0, 0, 0.5)),' + 'url(' + images[index] + ')'}}></div>
            </div>
            <div className ={'arrows_container'}>
                <button onClick={slideRight}>{">"}</button>
                <button onClick={slideLeft}>{"<"}</button>
            </div>
            </>
        )
    );
};

export default Slider;

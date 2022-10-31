/**
 * React Simple Image Slider
 * 
 * http://github.com/kimcoder/react-simple-image-slider#readme
 * 
 * yarn add react-simple-image-slier
 */
import React, { memo } from 'react';
import ImageSlider from 'react-simple-image-slider';

import slide1 from '../assets/img/img01.jpg';
import slide2 from '../assets/img/img02.jpg';
import slide3 from '../assets/img/img03.jpg';
import slide4 from '../assets/img/img04.jpg';

const Slider = memo(() => {
  const images = [
    { url : slide1 },
    { url : slide2 },
    { url : slide3 },
    { url : slide4 },
  ];

  return (
    <div>
      <ImageSlider
        width="100%"
        height={480}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.0}
        loop={true}
        style={{margin: 'auto'}}
      />
    </div>
  );
});

export default Slider;
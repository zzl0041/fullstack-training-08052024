import React, { Fragment, useState, useEffect } from 'react';
import 'h8k-components';
import Thumbs from './Thumbs';
import Viewer from './Viewer';

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';

const title = 'Catalog Viewer';

function SnowflakeOA() {
  const catalogsList = [
    { thumb: image1, image: image1 },
    { thumb: image2, image: image2 },
    { thumb: image3, image: image3 },
    { thumb: image4, image: image4 },
  ];

  const [catalogs] = useState(catalogsList);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(null);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === catalogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? catalogs.length - 1 : prevIndex - 1
    );
  };

  const handleThumbClick = (index) => {
    setActiveIndex(index);
  };

  const handleToggleSlideshow = (e) => {
    if (e.target.checked) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === catalogs.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      setSlideTimer(timer);
    } else {
      clearInterval(slideTimer);
      setSlideTimer(null);
    }
  };

  useEffect(() => {
    return () => {
      if (slideTimer) {
        clearInterval(slideTimer);
      }
    };
  }, [slideTimer]);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className='layout-row justify-content-center align-items-center mt-20'>
              <button
                className='icon-only outlined'
                data-testid='prev-slide-btn'
                onClick={handlePrev}
              >
                <i className='material-icons'>arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                onThumbClick={handleThumbClick}
              />
              <button
                className='icon-only outlined'
                data-testid='next-slide-btn'
                onClick={handleNext}
              >
                <i className='material-icons'>arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={handleToggleSlideshow}
          />
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default SnowflakeOA;

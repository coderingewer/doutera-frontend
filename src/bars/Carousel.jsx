import React from 'react'
import './carousel.css'

function centerDiv(divId) {
  const container = document.querySelector('.carousel-content');
  const div = document.getElementById(divId);

  const containerWidth = container.offsetWidth;
  const divWidth = div.offsetWidth;

  const offset = (containerWidth - divWidth) / 2;
  container.scrollLeft = div.offsetLeft - offset;
}
function Carousel(props) {
  return (
    <div className='carousel' >
      <div className="carousel-content">
        <div id='1' className="carousel-item carousel-item-1 carousel-clip-left">
          <div className="carousel-item-img carousel-item-1-img">
            <img loading='lazy' src={props.data[0].image} alt="" />
          </div>
          <div className="carousel-item-text cit1 carousel-item-1-text">
            <div className="carousel-item-text-content cit1c carousel-item-1-content">
              <div className="carousel-item-title">
                <span>{props.data[0].title}</span>
              </div>
              <div className="carousel-item-detail">
                <span>{props.data[0].detail}</span>
              </div>
            </div>
          </div>
        </div>
        <div id='2' className="carousel-item carousel-item-2 carousel-clip-left">
          <div className="carousel-item-img">
            <img loading='lazy' src={props.data[1].image} alt="" />
          </div>
          <div className="carousel-item-text cit2 carousel-item-2-text">
            <div className="carousel-item-text-content carousel-item-2-content">
              <div className="carousel-item-title carousel-item-title-1">
                <span>{props.data[1].title}</span>
              </div>
              <div className="carousel-item-detail">
                <span>{props.data[1].detail}</span>
              </div>
            </div>
          </div>
        </div>
        <div id='3' className="carousel-item carousel-item-1 carousel-clip-right">
          <div className="carousel-item-img carousel-item-1-img">
            <img loading='lazy' src={props.data[2].image} alt="" />
          </div>
          <div className="carousel-item-text cit3  carousel-item-1-text">
            <div className="carousel-item-text-content cit3c carousel-item-1-content">
              <div className="carousel-item-title">
                <span>{props.data[2].title}</span>
              </div>
              <div className="carousel-item-detail">
                <span>{props.data[2].detail}</span>
              </div>
            </div>
          </div>
        </div>
        <div id='4' className="carousel-item carousel-item-2  carousel-clip-right">
          <div className="carousel-item-img">
            <img loading='lazy' src={props.data[3].image} alt="" />
          </div>
          <div className="carousel-item-text cit4 carousel-item-2-text">
            <div className="carousel-item-text-content carousel-item-2-content">
              <div className="carousel-item-title carousel-item-title-1">
                <span>{props.data[3].title}</span>
              </div>
              <div className="carousel-item-detail">
                <span>{props.data[3].detail}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="carousel-btns">
        <button onClick={() => centerDiv('1')} className="scroll-btn"></button>
        <button onClick={() => centerDiv('2')} className="scroll-btn"></button>
        <button onClick={() => centerDiv('3')} className="scroll-btn"></button>
        <button onClick={() => centerDiv('4')} className="scroll-btn"></button>

      </div>
    </div>
  )
}

export default Carousel
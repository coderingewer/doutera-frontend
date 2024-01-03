import React, { useEffect, useState } from 'react'
import './caoursel.css'
import imageT from '../assets/Duotera/Duotera Tesla13688.jpg'

function centerDiv(divId) {
  const container = document.querySelector('.carousel-content');
  const div = document.getElementById(divId);

  const containerWidth = container.offsetWidth;
  const divWidth = div.offsetWidth;

  const offset = (containerWidth - divWidth) / 2;
  container.scrollLeft = div.offsetLeft - offset;
}

function Carousel() {
  return (
    <div className='carousel' >
      <div className="carousel-content">
        <div id='1' className="carousel-item carousel-item-1 carousel-clip-left">
          <div className="carousel-item-img carousel-item-1-img">
            <img src={imageT} alt="" />
          </div>
          <div className="carousel-item-text cit1 carousel-item-1-text">
            <div className="carousel-item-text-content cit1c carousel-item-1-content">
              <div className="carousel-item-title">
                <span>Tesla Model Y Aksesoires</span>
              </div>
              <div className="carousel-item-detail">
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
              </div>
            </div>
          </div>
        </div>
        <div id='2' className="carousel-item carousel-item-2 carousel-clip-left">
          <div className="carousel-item-img">
            <img src={imageT} alt="" />
          </div>
          <div className="carousel-item-text cit2  carousel-item-2-text">
            <div className="carousel-item-text-content carousel-item-2-content">
              <div className="carousel-item-detail">
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
              </div>
              <div className="carousel-item-title carousel-item-title-2">
                <span>Tesla Model Y Aksesoires</span>
              </div>
            </div>
          </div>
        </div>
        <div id='3' className="carousel-item carousel-item-1 carousel-clip-right">
          <div className="carousel-item-text cit3  carousel-item-1-text">
            <div className="carousel-item-text-content cit3c carousel-item-1-content">
              <div className="carousel-item-title">
                <span>Tesla Model Y Aksesoires</span>
              </div>
              <div className="carousel-item-detail">
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
              </div>
            </div>
          </div>
          <div className="carousel-item-img carousel-item-1-img">
            <img src={imageT} alt="" />
          </div>
        </div>
        <div id='4' className="carousel-item carousel-item-2  carousel-clip-right">
          <div className="carousel-item-text cit4 carousel-item-2-text">
            <div className="carousel-item-text-content carousel-item-2-content">
              <div  className="carousel-item-title carousel-item-title-1">
                <span>Tesla Model Y Aksesoires</span>
              </div>
              <div className="carousel-item-detail">
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
              </div>
            </div>
          </div>
          <div className="carousel-item-img">
            <img src={imageT} alt="" />
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
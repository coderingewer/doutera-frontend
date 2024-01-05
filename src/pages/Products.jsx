import React from 'react'
import productimg from '../assets/Duotera/Duotera Tesla13713.jpg'
import porductimg2 from '../assets/Duotera/Duotera Tesla13678.jpg'
import "./products.css"
import Carousel from '../bars/Carousel'
import TopBar from '../bars/TopBar'


function Products() {
    return (
        <div className='products' >
            <TopBar/>
            <Carousel />
            <div className="product-info">
                <img className='product-img'
                    style={{ width: '100%' }}
                    src={porductimg2} alt="" />
                <div className="product-features">
                    <div className="product-feature">
                        <div className='product-feature-content'> <span>Convenient</span></div>
                    </div>
                    <div className="product-feature">
                        <div className='product-feature-content'> <span>Best Quality</span></div>
                    </div>   <div className="product-feature">
                        <div className='product-feature-content'> <span>fully Compatible </span> </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="product-container2">
                    <div className="product-container2-media">
                        <img className='product-container2-media-content' src={productimg} alt="" />
                    </div>
                    <div className="product-container2-texts">
                        <div className="product-container2-title"> <span>Build for qulity</span></div>
                        <div className="product-container2-text"> <span>Quality kompakct and compatible spare parts take care of your car</span></div>
                    </div>
                </div>
            </div>
            <div className="product-container3">
                <div className="grid-one-container3 grid-left">
                    <div className="porduct-container3-grid grid-left-content ">
                        <div className="product-container3-grid-media">
                            <img className="product-container3-grid-media-content" src={porductimg2} alt="" />
                        </div>
                        <div className='product-container3-grid-text' >
                            <div className="product-container-left-grid-content">
                                <div className="porduct-grid-title">
                                    <span>For Quailty</span>
                                </div>
                                <div className="product-container3-grid-details">
                                    <span>
                                        Helo dsffgdr fthyrf rty şycş rtjon rtfyrog frtyrtgo9n uortyhoı voııghtyoıjn oyotghjno dftuyhugbo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-one-container3 grid-right">
                    <div className="porduct-container3-grid grid-right-content">
                        <div className="product-container3-grid-text">
                        <div className="product-container-right-grid-content">
                        <div className="porduct-grid-title">
                                    <span>For Quailty</span>
                                </div>
                                <div className="product-container3-grid-details">
                                    <span>
                                        Helo dsffgdr fthyrf rty şycş rtjon rtfyrog frtyrtgo9n uortyhoı voııghtyoıjn oyotghjno dftuyhugbo
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="product-container3-grid-media">
                            <img className="product-container3-grid-media-content" src={porductimg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="product-container2">
                    <div className="product-container2-media">
                        <img className='product-container2-media-content' src={productimg} alt="" />
                    </div>
                    <div className="product-container2-texts">
                        <div className="product-container2-title"> <span>Build for qulity</span></div>
                        <div className="product-container2-text"> <span>Quality kompakct and compatible spare parts take care of your car</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import productimg from '../assets/Duotera/Duotera Tesla13713.jpg'
import porductimg2 from '../assets/Duotera/Duotera Tesla13678.jpg'
import "./products.css"
import Carousel from '../bars/Carousel'
import "./home.css"
import { GetAllProducts } from '../Api/Products/ProductSlice'

function Products(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllProducts())
    }, [dispatch])
    const products = useSelector(state => state.products.products)
    console.log(products)
    return (
        <>

            <div className='products' >
                <Carousel data />
                <div className="product-info">
                    <img className='product-img'
                        style={{ width: '100%' }}
                        src="https://res.cloudinary.com/ddeatrwxs/image/upload/v1704919074/assets/Duotera/qdqpvsc8e6mdxmzuhov8.jpg" alt="" />
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
                            <video className='modely-aksesories-video product-container2-media-content' autoPlay muted loop>
                                <source src="https://res.cloudinary.com/ddeatrwxs/video/upload/v1704918815/assets/Duotera/rijdz8h7n3y0bmvstcod.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>                    </div>
                        <div className="product-container2-texts">
                            <div className="product-container2-title"> <span>Build for qulity</span></div>
                            <div className="product-container2-text"> <span>Quality kompakct and compatible spare parts take care of your car</span></div>
                        </div>
                    </div>
                </div>
                <div className="product-container3">
                    <div className="porduct-container3-grid grid-left ">
                        <div className="product-container3-grid-media">
                            <img className="product-container3-grid-media-content" src={porductimg2} alt="" />
                        </div>
                        <div className='product-container3-grid-text' >
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
                    <div className="porduct-container3-grid grid-right ">
                        <div className="product-container3-grid-media">
                            <img className="product-container3-grid-media-content" src={porductimg2} alt="" />
                        </div>
                        <div className='product-container3-grid-text' >
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
                    <div className="porduct-container3-grid grid-left ">
                        <div className="product-container3-grid-media">
                            <img className="product-container3-grid-media-content" src={porductimg2} alt="" />
                        </div>
                        <div className='product-container3-grid-text' >
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
        </>
    )
}

export default Products
import { useSelector } from 'react-redux'
import React from 'react'
import "./products.css"
import Carousel from '../bars/Carousel'
import "./home.css"

function Products(props) {
    const productsfromDb = useSelector(state => state.products.products)
    return (
        <>

            {
                productsfromDb.map((product, i) => (
                    <div key={i + 1} className='products' >

                        <Carousel data={product.productCarouselItems} />

                        <div className="product-info">
                            <img className='product-img'
                                style={{ width: '100%' }}
                                loading='lazy'
                                src={product.featuresImg} alt={product.featureOne} />
                            <div className="product-features">
                                <div className="product-feature">
                                    <div className='product-feature-content'> <span>{product.featureOne}</span></div>
                                </div>
                                <div className="product-feature">
                                    <div className='product-feature-content'> <span>{product.featureTwo}</span></div>
                                </div>   <div className="product-feature">
                                    <div className='product-feature-content'> <span>{product.featureTwo}</span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="container2">
                            <div className="product-container2">
                                <div className="product-container2-media">
                                    <video className='modely-aksesories-video product-container2-media-content' autoPlay muted loop>
                                        <source src={product.productContainerContent.videUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>                    </div>
                                <div className="product-container2-texts">
                                    <div className="product-container2-title"> <span>{product.productContainerContent.title} </span></div>
                                    <div className="product-container2-text"> <span>{product.productContainerContent.detail}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="product-container3">
                            {
                                product.subProducts.map((subProduct, i) => (
                                    <div key={i + 1} className={i % 2 === 0 ? "porduct-container3-grid grid-right" : "porduct-container3-grid grid-left"} >
                                        <div className="product-container3-grid-media">
                                            <img className="product-container3-grid-media-content" src={subProduct.imageUrl} alt={subProduct.title} />
                                        </div>
                                        <div className='product-container3-grid-text' >
                                            <div className="porduct-grid-title">
                                                <span>{subProduct.title}</span>
                                            </div>
                                            <div className="product-container3-grid-details">
                                                <span>
                                                    {subProduct.detail}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Products
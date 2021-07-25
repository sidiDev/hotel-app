import Carousel from "./Carousel"
import { getStars, getNoStars } from '../Reviews/Reviews'

export default ({ hotelData }) => {
    return (
        <div className="details-container">
            <div className="details">
                <Carousel imgs={[hotelData.img, 'img4.webp', 'img5.webp', 'img7.webp']} />
                <div className="title-price-details">
                    <h1>{hotelData.title}</h1>
                    <span>{hotelData.price.toLocaleString()}<span style={{fontSize: '13px', color: '#4B5563'}}> /per month</span></span>
                </div>
                <span style={{
                    color: '#374151',
                    fontSize: '20px',
                    fontWeight: '500',
                    marginTop: '20px',
                    display: 'inline-block'
                }}>
                    Details :
                <p style={{
                    display: 'inline',
                    marginTop: '10px',
                    marginLeft: '10px',
                    color: '#6B7280',
                    fontWeight: '400',
                    fontSize: '15px',
                }}>
                    {hotelData.details}
                </p>
                </span>
            </div>
            <div className="details-side">
                <div className="hotel-reviews">
                    <span style={{
                    color: '#374151',
                    fontSize: '20px',
                    fontWeight: '500',
                    marginTop: '20px',
                    }}>
                        Overall rating
                    </span>
                    <div className="hotel-reviews-container">
                        <span style={{
                            fontSize: '25px',
                            color: '#4F46E5',
                            marginRight: '10px'
                        }}>{hotelData.reviews.reviewsCount}</span>
                        <span style={{marginRight: '3px'}}>Reviews</span>
                        {
                            getStars(hotelData.reviews.star)
                        }
                        {
                            getNoStars(hotelData.reviews.star)
                        }
                    </div>
                    <div className="overall-rating-container">
                        <div className="container-1">
                            <div className="overall-rating">
                                <span>Location</span>
                                <span style={{float: 'right'}}>4.7</span>
                                <div className="rating"></div>
                            </div>
                            <div className="overall-rating">
                                <span>Services</span>
                                <span style={{float: 'right'}}>3.1</span>
                                <div className="rating"></div>
                            </div>
                            <div className="overall-rating">
                                <span>Location</span>
                                <span style={{float: 'right'}}>4.9</span>
                                <div className="rating"></div>
                            </div>
                        </div>
                        <div className="container-2">
                            <div className="overall-rating">
                                <span>Facility</span>
                                <span style={{float: 'right'}}>4.8</span>
                                <div className="rating"></div>
                            </div>
                            <div className="overall-rating">
                                <span>Price</span>
                                <span style={{float: 'right'}}>4.6</span>
                                <div className="rating"></div>
                            </div>
                            <div className="overall-rating">
                                <span>Fitness</span>
                                <span style={{float: 'right'}}>4.7</span>
                                <div className="rating"></div>
                            </div>
                        </div>
                    </div>
                    <span style={{
                        color: '#374151',
                        fontSize: '20px',
                        fontWeight: '500',
                        marginTop: '25px',
                        display: 'block'
                    }}>
                        Hotel services
                    </span>
                    <div className="hotel-services">
                        <div className="service">
                            <div className="service-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                </svg>
                            </div>
                            <span>5G Internet</span>
                        </div>
                        <div className="service">
                            <div className="service-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                            </div>
                            <span>Parking</span>
                        </div>
                        <div className="service">
                            <div className="service-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span>Shopping</span>
                        </div>
                        <div className="service">
                            <div className="service-logo">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                </svg>
                            </div>
                            <span>Weekly cake</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
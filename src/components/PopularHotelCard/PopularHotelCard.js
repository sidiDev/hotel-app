import { Link } from 'react-router-dom'
import { getStars, getNoStars } from '../Reviews/Reviews'
import data from '../../json/data.json'
import './index.css'

export default () => {

    return (
        <>
            {
                data.slice(5, data.length).map((items, idx) => {
                    return (
                            <Link to={`/hotel/${items.title.replace(/ /g, '-')}`} key={idx} className="popular-hotel-container">
                                <div className="popular-hotel-img">
                                    <img src={'/images/'+items.img} loading="lazy" />
                                </div>
                                <div className="hotel-details-container">
                                    <div className="hotel-details">
                                        <span>{items.beds} BEDS</span>
                                        <span>&#8729;</span>
                                        <span>{items.baths} BATHS</span>
                                    </div>
                                    <h1>{items.title}</h1>
                                    <span className="hotel-price">
                                        ${items.price.toLocaleString()} /mo
                                    </span>
                                    <div className="hotel-reviews">
                                        <div className="hotel-reviews-container">
                                            {
                                                getStars(items.reviews.star)
                                            }
                                            {
                                                getNoStars(items.reviews.star)
                                            }
                                        </div>
                                        <span>{items.reviews.reviewsCount} Reviews</span>
                                    </div>
                                </div>
                            </Link>
                    )
                })
            }
        </>
    )
}
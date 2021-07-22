import { Link } from 'react-router-dom'
import data from '../../json/data.json'

export default () => {

    const getStars = (start) => {
        return Array.apply(null, {length: start}).map(i => {
            return  <svg key={i} xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
        })
    }

    const getNoStars = (start) => {
        return Array.apply(null, {length: 5 - start}).map(i => {
            return  <svg key={i} xmlns="http://www.w3.org/2000/svg" class="start" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
        })
    }

    return (
        <>
            {
                data.slice(0, 8).map((items, idx) => {
                    return (
                        <>
                            <Link to={`/hotel/${items.title.replace(/ /g, '-')}`} className="hotel-card" key={idx}>
                                <div className="hotel-img">
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

                        </>
                    )
                })
            }
        </>
    )
}
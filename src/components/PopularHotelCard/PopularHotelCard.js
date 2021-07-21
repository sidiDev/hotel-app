import './index.css'
import imgPreview from './1hotelsouthbeach.png'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <Link to="" className="popular-hotel-container">
            <div className="popular-hotel-img">
                <img src={imgPreview} />
            </div>
            <div className="hotel-details-container">
                <div className="hotel-details">
                    <span>4 BEDS</span>
                    <span>&#8729;</span>
                    <span>2 BATHS</span>
                </div>
                <h1>Modern home in city center</h1>
                <span className="hotel-price">
                    $1,400 /mo
                </span>
                <div className="hotel-reviews">
                    <div className="hotel-reviews-container">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <span>34 Reviews</span>
                </div>
            </div>
        </Link>
    )
}
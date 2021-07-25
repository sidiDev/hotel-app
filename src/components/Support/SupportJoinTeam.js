import { Link } from "react-router-dom"

export default () => {
    return (
        <div className="join-team-container">
                <img src="/images/img4.webp" />
            <div className="join-team-details">
                <div className="details">
                    <span>Join our team</span>
                    <p>
                    Hotelfy support is here to help. Learn more about popular topics and find resources that will help you with all of your Hotelfy services.
                    </p>
                    <Link to="/about">
                        Explore our mission
                    </Link>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"

export default ({ data }) => {

    const { icon, title, details } = data

    return (
        <div className="support-card-contaner">
            <div className="support-card-header">
                <div className="support-card-logo">
                    { icon }
                </div>
                <div className="support-card-details">
                    <span>{title}</span>
                    <p>{details}</p>
                </div>
            </div>
            <div className="support-card-footer">
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
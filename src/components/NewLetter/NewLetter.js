import './index.css'

export default () => {
    return (
        <div className="new-letter-container">
            <div className="new-letter">
                <span>Sign up for our newslleter</span>
                <p>Sign upp for our newsletter to stay up to date</p>
            </div>
            <div className="new-letter-form">
                <input type="email" placeholder="Enter your email" />
                <button>
                    Subscribe
                </button>
            </div>
        </div>
    )
}
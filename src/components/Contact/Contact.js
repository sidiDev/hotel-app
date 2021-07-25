import Nav from "../Nav/Nav"
import './index.css'

export default () => {
    return (
        <div className="contact-container">
            <Nav />
            <h1>Contact us</h1>
            <form className="contact-form">
                <div className="input-groups">
                    <div className="contact-input">
                        <label>First name</label>
                        <input type="text" />
                    </div>
                    <div className="contact-input">
                        <label>Last name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="contact-input">
                    <label>Gmail</label>
                    <input type="text" />
                </div>
                <div className="message-input">
                    <label>Message</label>
                    <textarea />
                </div>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}
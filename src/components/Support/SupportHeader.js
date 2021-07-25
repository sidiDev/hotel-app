import Nav from "../Nav/Nav"

export default () => {
    return (
        <div className="support-header" style={{backgroundImage: `url(/images/img1.webp)`}}>
            <Nav />
            <div className="support-header-details">
                <h1>Support</h1>
                <p>
                    Hotelfy support is here to help. Learn more about popular topics and find resources that will help you with all of your Hotelfy services.
                </p>
            </div>
        </div>
    )
}
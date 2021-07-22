import HotelCard from "./HotelCard"
import './index.css'

export default () => {
    return (
        <>
        <div style={{margin: '2em 2em -2em 2em'}}>
            <h1 style={{fontSize: '25px', color: '#2D3748'}}>Hootels</h1>
            <p style={{fontSize: '15px', color: '#2D3748', marginTop: '5px'}}>Chose beautiful and comfortable hotel with perfect price</p>
        </div>
        <div className="hotel-cards-container">
            <HotelCard />
        </div>
        </>
    )
}
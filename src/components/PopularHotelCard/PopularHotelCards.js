import './index.css'
import PopularHotelCard from './PopularHotelCard'

export default () => {
    return (
        <>
        <div style={{margin: '2em 2em -2em 2em'}}>
            <h1 style={{fontSize: '25px', color: '#2D3748'}}>Popular Hootels</h1>
            <p style={{fontSize: '15px', color: '#2D3748', marginTop: '5px'}}>Here are the popular hotels</p>
        </div>
        <div className="popular-hotel">
            <PopularHotelCard />
            <PopularHotelCard />
            <PopularHotelCard />
        </div>
        </>
    )
}
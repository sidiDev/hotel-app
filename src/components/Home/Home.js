import Filter from '../Filter/Filter'
import Nav from '../Nav/Nav'
import PopularHotelCard from '../PopularHotelCard/PopularHotelCard'
import HotelCard from '../HotelCard/HotelCard'
import './index.css'

export default () => {
    return (
        <main className="home">
            <div className="home-container">
                <div className="home-filter">
                    <Filter />
                </div>
                <div className="home-content">
                    <Nav />
                    <PopularHotelCard />
                    <HotelCard />
                </div>
            </div>
        </main>
    )
}
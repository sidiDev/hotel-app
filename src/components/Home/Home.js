import Filter from '../Filter'
import Nav from '../Nav'
import PopularHotelCard from '../PopularHotelCard'
import HotelCard from '../HotelCard'

export default () => {
    return (
        <main>
            <div>
                <div>
                    <Filter />
                </div>
                <div>
                    <Nav />
                    <PopularHotelCard />
                    <HotelCard />
                </div>
            </div>
        </main>
    )
}
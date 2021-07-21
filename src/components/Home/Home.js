import Filter from '../Filter/Filter'
import Nav from '../Nav/Nav'
import HotelCards from '../HotelCard/HotelCards'
import './index.css'
import PopularHotelCards from '../PopularHotelCard/PopularHotelCards'
import { useState } from 'react'

export default () => {

    const [isOpen, setOpenBool] = useState(false)

    const closeFilter = () => setOpenBool(false)
    return (
        <main className="home">
                    <div className={isOpen ? '' : 'filter-cover'} onClick={() => setOpenBool(false)} style={{
                        position: 'fixed',
                        top: 0,
                        zIndex: 2,
                        width: '100%',
                        height: '100vh',
                        background: 'rgb(0 0 0 / 32%)'
                    }}></div>
            <div className="home-container">
                <div className={`home-filter ${isOpen ? 'show-filter' : ''}`}>
                    <Filter closeFilter={closeFilter} />
                </div>
                <div className="home-content">
                    <Nav />
                    <button className="filter-btn" onClick={() => setOpenBool(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                            </svg>
                        <span>Filter</span>
                    </button>
                    <PopularHotelCards />
                    <HotelCards />
                </div>
            </div>
        </main>
    )
}
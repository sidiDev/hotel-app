import './index.css'

export default () => {
    return (
        <div className="filter">
            <div className="filter-container">
                <div className="brand">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Hotelfy</span>
                </div>

                <div className="filter-controllers">

                    <div className="filter-price-range">
                        <input type="range" />
                        <span></span>
                    </div>

                    <div className="filter-options-container">
                        <div className="filter-option">
                            <label>Roms</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="filter-option">
                            <label>Bathroms</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
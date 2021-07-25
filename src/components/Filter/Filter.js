import { useEffect, useRef, useState } from 'react'
import './index.css'

export default ({ closeFilter }) => {

    const rangeRef = useRef()
    const rangeBarRef = useRef()
    const rangeBtnRef = useRef()

    const [pressure, setPressure] = useState(false)
    const [priceRange, setPriceRange] = useState(0)

    const mouseUp = () => {
        setPressure(false)
        if (document.querySelector('.range') != null) document.querySelector('.range').style = 'cursor: default'
    }

    const mouseDown = () => {
        setPressure(true)
        rangeRef.current.style = 'cursor: pointer'
    }

    const mouseMove = (e) => {
        //e.pageX
        const rangeElX = rangeRef.current.clientWidth
        const rangeX = e.pageX

        if (pressure && rangeX < rangeElX) {
            rangeRef.current.style = 'cursor: pointer'
            rangeBarRef.current.style = `width: ${rangeX}px`
            rangeBtnRef.current.style = `left: ${rangeX - 10}px`
            setPriceRange(rangeX / 10 * 1000)
        }
    }

    const touchMove = (e) => {
        const rangeElX = rangeRef.current.clientWidth
        const rangeX = e.changedTouches[0].pageX

        if (rangeX < rangeElX && rangeX > 15) {
            rangeBarRef.current.style = `width: ${rangeX}px`
            rangeBtnRef.current.style = `left: ${rangeX - 10}px`
            setPriceRange(rangeX / 10 * 1000)
        }
    }

    useEffect(() => {
        document.addEventListener('mouseup', mouseUp)
    }, [])

    return (
        <div className="filter">
            <div className="filter-container">
                <div className="brand">
                    <img src="/logo.png" />
                    <span>Hotelfy</span>
                </div>

                <form className="filter-controllers" onSubmit={(e) => e.preventDefault()}>
                    <div className="close-filter-btn">
                        <button onClick={closeFilter}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="filter-price-range">
                        <span>Price <span style={{fontSize: '15px'}}>( {Math.floor(priceRange).toLocaleString()} K/mo)</span></span>
                        <div className="range" ref={rangeRef} 
                            onMouseUp={mouseUp} onMouseMove={mouseMove}
                        >
                            <button onTouchMove={touchMove} onMouseUp={mouseUp} onMouseDown={mouseDown} ref={rangeBtnRef}></button>
                            <span ref={rangeBarRef}></span>
                        </div>
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

                    <div className="filter-checkboxs-radios">
                        <span>Amentities</span>
                        <div className="filter-checkboxs">
                            <div className="filter-checkbox">
                                <label for="air">Air conditioning</label>
                                <input type="checkbox" id="air" />
                            </div>
                            <div className="filter-checkbox">
                                <label for="pool">Pool</label>
                                <input type="checkbox" id="pool" />
                            </div>
                            <div className="filter-checkbox">
                                <label for="beach">Beach</label>
                                <input type="checkbox" id="beach" />
                            </div>
                            <div className="filter-checkbox">
                                <label for="petFriendly">Pet friendly</label>
                                <input type="checkbox" id="petFriendly" />
                            </div>
                            <div className="filter-checkbox">
                                <label for="balcony">Balcony</label>
                                <input type="checkbox" id="balcony" />
                            </div>
                        </div>

                        <span>Property Type</span>
                        <div className="filter-radios">
                            <div className="filter-radio">
                                <label for="apartement">Apartement</label>
                                <input type="radio" name="apartement" id="apartement" />
                            </div>
                            <div className="filter-radio">
                                <label for="house">House</label>
                                <input type="radio" name="house" id="house" />
                            </div>
                            <div className="filter-radio">
                                <label for="loft">Loft</label>
                                <input type="radio" name="loft" id="loft" />
                            </div>
                            <div className="filter-radio">
                                <label for="townhouse">Townhouse</label>
                                <input type="radio" name="townhouse" id="townhouse" />
                            </div>
                        </div>
                    </div>

                    <div className="filter-update">
                        <button onClick={closeFilter}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
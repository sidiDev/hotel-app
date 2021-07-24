import { useState } from "react"

export default ({imgs = []}) => {

    const [counter, setCounter] = useState(0)

    const moveToRight = () => {
        if (counter == 0) setCounter(imgs.length - 1)
        else setCounter(counter - 1)
    }

    const moveToLeft = () => {
        if (counter == imgs.length - 1) setCounter(0)
        else setCounter(counter + 1)
    }
        
    return (
        <div className="carousel-container">
            <img src={`/images/${imgs[counter]}`} />
            <div className="carousel-controller">
                <button onClick={moveToRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={moveToLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="carousel-dots">
                {
                   imgs.map((items, idx) => {
                       return (
                           <button className={`${counter == idx ? 'carousel-dot-active' : ''}`}
                                onClick={() => setCounter(idx)}
                            >
                           </button>
                       )
                   })
                }
            </div>
            <button className="like-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
        </div>
    )
}
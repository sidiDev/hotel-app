import { useState } from "react"
import { NavLink } from "react-router-dom"
import './index.css'

export default () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="navbar">
            <div className="brand-menuBtn-container">
                <a href="/" className="brand" style={{color: '#000'}}>
                    <img src="/logo.png" />
                    <span>Hotelfy</span>
                </a>
                <button className="menu-btn" onClick={toggleMenu}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`navbar-container ${isOpen ? '' : 'hidden'}`}>
                <div className="nav-search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search" />
                </div>
                <ul className="nav-items-list">
                    <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/support">Support</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
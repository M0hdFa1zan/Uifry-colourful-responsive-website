import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='innav'>
                <div className='brandlogo'><img src='../Assets/Images/uilogo.png' alt='' /></div>
                <div className='navtabs'>
                    <div className='innavtabs'>
                        <div className='home'>Home</div>
                        <div>About Us</div>
                        <div>Pricing</div>
                        <div>Features</div>
                    </div>
                </div>
                <div className='navbutton'>
                    <button>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

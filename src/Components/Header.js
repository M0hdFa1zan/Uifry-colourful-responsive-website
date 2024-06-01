import React from 'react'
import Navbar from "./Navbar"
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='headstar1'><img src='../Assets/Images/smallstar.png' /></div>
            <div className='headstar2'><img src='../Assets/Images/smallstar.png' /></div>
            <Navbar />
            <div className='splash'><img src='../Assets/Images/ytored.png' /></div>
            <div className='inheader'>
                <div className='headerarea'>
                    <div className='headerleft'>
                        <div className='besthead'>Make The Best Financial Decisions</div>
                        <div className='bestpara'>Cum Et convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</div>
                        <div className='bestbutton'><button>Get Started<img src='../Assets/Images/arrow.png' /></button>
                            <div className='mediaplayer'>
                                <div><img src='../Assets/Images/player.png' /></div>
                                <div className='watch'> Watch Video</div>
                            </div>
                        </div>
                        <div className='design'><img src='../Assets/Images/design.png' /></div>
                    </div>
                    <div className='headerright'>
                        <div className='phone1'><img src='../Assets/Images/phone1-1.png' /></div>
                        <div className='phone2'><img src='../Assets/Images/phone1-2.png' /></div>
                        <div className='phone3'><img src='../Assets/Images/phone1-3.png' /></div>
                    </div>
                </div>
            </div>
            <div className='splash2'><img src='../Assets/Images/redflash.png' /></div>
        </div>
    )
}

export default Header

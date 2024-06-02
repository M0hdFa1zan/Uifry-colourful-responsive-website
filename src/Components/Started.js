import React from 'react'
import "./Started.css"

function Started() {
    return (
        <div className='started'>
            <div className='startstar3'><img src='../Assets/Images/smallstar.png' /></div>
            <div className='startstar4'><img src='../Assets/Images/bigstar.png' /></div>
            <div className='startstar'><img src='../Assets/Images/whitebig.png' /></div>
            <div className='startstar2'><img src='../Assets/Images/whitesmall.png' /></div>
            <div className='startsplash'><img src='../Assets/Images/ytored.png' /></div>
            <div className='instart'>
                <div className='startleft'>
                    <div className='starthead'>Ready To Get Started?</div>
                    <div className='startpara'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</div>
                    <div className='startbutton'><button>Download App<img src='../Assets/Images/apple.png' /></button></div>
                </div>
                <div className='startright'>
                    <div className='startimg'><img src='../Assets/Images/iphone13.png' /></div>
                </div>
            </div>
        </div>
    )
}

export default Started

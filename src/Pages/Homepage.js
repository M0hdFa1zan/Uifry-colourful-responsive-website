import React from 'react'
import Header from '../Components/Header'
import Premium from '../Components/Premium'
import Why from '../Components/Why'
import Testimonial from '../Components/Testimonial'
import Asked from '../Components/Asked'
import Started from '../Components/Started'
import Footer from '../Components/Footer'

import "./Homepage.css"

function Homepage() {
    
    return (
        <div className='homepage'>
            
            <Header />
            <Premium />
            <Why />
            <Testimonial />
            <Asked />
            <Started />
            <Footer />
        </div>
    )
}

export default Homepage

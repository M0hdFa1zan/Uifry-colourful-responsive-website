import React from 'react'
import "./Testimonial.css"

function Testimonial() {
    return (
        <div className='testimonial'>
            <div className='usersplash'><img src='../Assets/Images/ytored.png' /></div>
            <div className='userstar'><img src='../Assets/Images/smallstar.png' /></div>
            <div className='intest'>
                <div className='testtop'>
                    <div className='testimo'>TESTIMONIAL</div>
                    <div className='users'>What Our Users Say About Us?</div>
                </div>
                <div className='testdetail'>
                    <div className='testleft'><img src='../Assets/Images/five.png' /></div>
                    <div className='testright'>
                        <div className='testhead'>The Best Financial Accounting App Ever!</div>
                        <div className='testpara'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</div>
                        <div className='testimg'><img src='../Assets/Images/fivepeople.png' /></div>
                        <div className='nick'>Nick Jonas</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

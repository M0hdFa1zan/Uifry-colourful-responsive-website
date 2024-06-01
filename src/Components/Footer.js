import React from 'react'
import "./Footer.css"

function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className='footer'>
            <div className='infoot'>
                <div className='foottop'>
                    <div className='footone'>
                        <div className='footlogo'><img src='../Assets/Images/uilogo.png' /></div>
                        <div className='helpdesk'>
                            <div className='minilogo'><img src='../Assets/Images/message.png' /></div>
                            <div className='logodetail'>help@frybix.com</div>
                        </div>
                        <div className='phoneno'>
                            <div className='minilogo'><img src='../Assets/Images/phone.png' /></div>
                            <div className='logodetail'>+1 234 456 678 89</div>
                        </div>
                    </div>
                    <div className='foottwo'>
                        <div className='foothead'>Links</div>
                        <div className='foottabs'>Home</div>
                        <div className='foottabs'>About Us</div>
                        <div className='foottabs'>Bookings</div>
                        <div className='foottabs'>Blog</div>
                    </div>
                    <div className='footthree'>
                        <div className='foothead'>Legal</div>
                        <div className='foottabs'>Terms of use</div>
                        <div className='foottabs'>Privacy policy</div>
                        <div className='foottabs'>Cookie policy</div>
                    </div>
                    <div className='footfour'>
                        <div className='foothead'>Product</div>
                        <div className='foottabs'>Take tour</div>
                        <div className='foottabs'>Live chat</div>
                        <div className='foottabs'>Reveiws</div>
                    </div>
                    <div className='footfive'>
                        <div className='foothead'>Newsletter</div>
                        <div className='foottabs'>Stay up to date</div>
                        <div className='butinp'><input placeholder='Your email' /><button>Subscribe</button></div>
                    </div>
                </div>
                <div className='footbottom'>
                    <div>Copyright {year} Uifry.com All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer

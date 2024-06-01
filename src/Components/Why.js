import React from 'react'
import "./Why.css"

function Why() {
    return (
        <div className='why'>
            <div className='whystar'><img src='../Assets/Images/bigstar.png' /></div>
            <div className='onhold'><img src='../Assets/Images/onhold.png' /></div>
            <div className='whysplash'><img src='../Assets/Images/ytored.png' /></div>
            <div className='inwhy'>
                <div className='whyleft'>
                    <div className='advantages'>ADVANTAGES</div>
                    <div className='whyhead'>Why choose Uifry?</div>

                    <div className='whydetail'>
                        <div className='subwhy'>
                            <div className='bellimg'><img src='../Assets/Images/bell.png' /></div>
                            <div className='clever'>Clever notifications</div>
                        </div>
                        <div className='whypara'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
                    </div>
                </div>
                <div className='whyright'>
                    <div className='whyimg'>
                        <img src='../Assets/Images/whyphone.png' />
                    </div>
                </div>
            </div>
            <div className='infully'>
                <div className='whyright'>
                    <div className='whyimg'>
                        <img src='../Assets/Images/fullyphone.png' />
                    </div>
                </div>
                <div className='whyleft'>
                    <div className='visa'><img src='../Assets/Images/visa.png' /></div>
                    <div className='visastar'><img src='../Assets/Images/smallstar.png' /></div>
                    <div className='fullysplash'><img src='../Assets/Images/fullysplash.png' /></div>
                    <div className='visastar2'><img src='../Assets/Images/bigstar.png' /></div>
                    <div className='whydetail'>
                        <div className='subwhy'>
                            <div className='bellimg'><img src='../Assets/Images/bell.png' /></div>
                            <div className='clever'>Fully customizable</div>
                        </div>
                        <div className='whypara'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why

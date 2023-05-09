import React from 'react'
import location from "../../img/Location_photo.png"

const Location = () => {
  return (
    <div className='Location_Container'>
        <div className='Location_Content'>
            <div className='Location_Main_Section' data-aos="fade-left"  data-aos-duration="1500">

                <div className='Location_Main_Section_Heading'>
                    <span>We are not alone</span>
                </div>

                <div className='Location_Main_Section_Text'>
                    <div className='First_Para Location_Text'>
                        Every year we open more and more establishments across
                        the country, last year we opened 7 new places
                        and we are not going to stop there
                    </div>

                    <div className='Second_Para Location_Text'>
                        Choose any of our 48 establishments and we 
                        will deliver food to you faster than anyone 
                        else and with the highest quality
                    </div>
                </div>

            </div>

            <div className='Location_Photo_Section' data-aos="fade-right"  data-aos-duration="1500">

                <div className='Photo_Container_Location'>
                    <img src={location} className='HomePagePhoto' alt="banner_photo_Location"></img>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Location
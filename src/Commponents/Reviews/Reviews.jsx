import React from 'react'
import { Link } from 'react-router-dom'
import reviews from "../../img/ReviewsPhoto.png"
const Reviews = () => {
  return (
    <div className='Reviews_Container'>
        <div className='Reviews_Content'>
            <div className='Reviews_Main_Section' data-aos="fade-right"  data-aos-duration="1500">

                <div className='Reviews_Main_Section_Heading'>
                    <span>We appreciate you</span>
                </div>

                <div className='Reviews_Main_Section_Text'>
                    <span>
                        We appreciate every comment you write about our
                        delivery, every day, based on the comments we read, 
                        we improve and become only stronger. THANK YOU!
                    </span>
                </div>

            </div>

            <div className='Reviews_Photo_Section' data-aos="fade-left"  data-aos-duration="1500">

                <div className='Photo_Container_Reviews'>
                    <img src={reviews} className='HomePagePhoto' alt="banner_photo_Reviews"></img>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Reviews
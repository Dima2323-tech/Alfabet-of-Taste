import React from 'react'
import { Link } from 'react-router-dom'
import pizza from "../../img/pizza_photo.png"
const Quality = () => {
  return (
    <div className='Quality_Container'>
        <div className='Quality_Content'>
            <div className='Quality_Main_Section' data-aos="fade-right"  data-aos-duration="1500">

                <div className='Quality_Main_Section_Heading'>
                    <span>Quality is our second name</span>
                </div>

                <div className='Quality_Main_Section_Text'>
                    <span>We use only quality products, from proven suppliers, 
                        in the products that we use for our dishes there are 
                        no GMOs or other harmful additives..
                    </span>
                </div>

                <div className='Quality_Main_Section_Btns'>

                    <Link to="/Menu">
                        <button className='Btn Order'>
                            <span>Order Now</span>
                        </button>
                    </Link>
                    

                    <Link to="/Contact" >
                        <button className='Btn Contact'>
                            <span>Contact Us!</span>
                        </button>
                    </Link>
                </div>

            </div>

            <div className='Quality_Photo_Section' data-aos="fade-left"  data-aos-duration="1500">

                <div className='Photo_Container_Quality'>
                    <img src={pizza} className='HomePagePhoto' alt="banner_photo_Quality"></img>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Quality
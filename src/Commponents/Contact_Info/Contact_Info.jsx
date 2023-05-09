import React from 'react'
import map from "../../img/Map.png"
const Contact_Info = () => {
  return (
    <div className='Contact_Info_Container'>
        <div className='Contact_Info_Content'>
            <div className='Contact_Info_Map' data-aos="zoom-out"  data-aos-duration="1500">
                <img src={map} alt="Contact_Info_Map"/>
            </div>

            <div className='Contact_Info_Contacts'>
                <div className='Contact_Info_Contacts_Heading' data-aos="fade-down"  data-aos-duration="1500">
                    <span>Contacts</span>
                </div>

                <div className='Contact_Info_Contacts_Description'>
                    <span className='Des_Heading'>We are located almost all over Ukraine</span>

                    <div className='Contact_Info_Contacts_Description_Phones'>
                        <span >Call us on our numbers</span>

                        <p data-aos="fade-right"  data-aos-duration="1500" data-aos-offset="-100"><a href='tel:+380665553311'>+38 (066) 555-33-11</a></p>

                        <p data-aos="fade-right"  data-aos-duration="1900" data-aos-offset="-100"><a href='tel:+380984441312'>+38 (098) 444-13-12</a></p>

                        <p data-aos="fade-right"  data-aos-duration="2300" data-aos-offset="-100"><a href='tel:+380636666666'>+38 (063) 666-66-66</a></p>

                    </div>

                    <div className='Contact_Info_Contacts_Description_Email'>
                        <span>Or email us</span>

                        <p data-aos="fade-left"  data-aos-duration="1500" data-aos-offset="-100"><a href='mailto:alphabetoftaste@gmail.com'>alphabetoftaste@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact_Info
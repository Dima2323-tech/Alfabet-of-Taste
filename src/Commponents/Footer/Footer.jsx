import React from 'react'
import logo from "../../img/logo.png"
import {AiOutlineTwitter , AiFillFacebook , AiFillLinkedin} from "react-icons/ai"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>

            <div className='Footer_Content'>

                <div className='Footer_Privacy'>
                    <span>Copywright 2023 Alphabet of Taste</span>
                </div>
                
                <div className='Footer_Logo'>
                    <Link to='/'><img src={logo} alt='logo'/></Link>
                </div>

                <div className='Footer_Icons'>

                    <div className='icon_container'>
                        <AiOutlineTwitter className='heart icon'/>
                    </div>

                    <div className='icon_container'>
                        <AiFillFacebook className='search icon'/>
                    </div>

                    <div className='icon_container'>
                        <AiFillLinkedin className='cart icon'/>
                    </div>

                </div>
            
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'



const AboutDescription = (props) => {
  return (
            <div className='About_Description_Container'>
                <div className='About_Description_Content'>

                    <div className='About_Description_Heading' data-aos="fade-down"  data-aos-duration="1500">
                        <span>About Us!</span>
                    </div>

                    <div className='About_Description_Text'>
                        <p data-aos="fade-left"  data-aos-duration="1500">
                            Alfabet of Taste has been providing its services for a long time. 
                            We have been on the market for more than 14 years,
                             we opened our first restaurant in 2009 and started 
                             as a small family business, but every year we grew 
                             and grew, in 2009 we had only 15 employees, this year
                              this number has grown up to 1000 people, they include 
                              cooks, waiters, managers, couriers and many other specialists
                        </p>

                        <p data-aos="fade-right"  data-aos-duration="1500">
                            Many of our visitors now came to us when we first opened and 
                            they still use our services, this speaks of our quality and 
                            people's trust in us
                        </p>

                        <p data-aos="fade-left"   data-aos-duration="1500">
                            Not least important is the fact that most of the dishes in our establishment 
                            are prepared according to secret family recipes, one of the main ingredients is love.
                        </p>
                    </div>

                    <div className='About_Partners'>
                        <div className='About_Partners_Heading' data-aos="fade-down"  data-aos-duration="1500">
                            <span>Partners</span>
                        </div>

                        <div className='About_Partners_Text' data-aos="fade-down"  data-aos-duration="1500">
                            <span>For a long time of work, we have not only friends but also partners</span>
                        </div>
                        
                        <div className='About_Partners_Img' data-aos="fade-up"  data-aos-duration="1500">
                            {props.logosArr.map((el) => (
                                <a key={el.id} href={el.link}>
                                   <img src={`./img/${el.name }`+ `.png`} alt='partners_logo'/> 
                                </a>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
  )
}

export {AboutDescription}
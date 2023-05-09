import React, { useState } from 'react';
import logo from '../../img/logo.png';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import {CgCloseO} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Order from '../Order/Order';

const ShowOrders = (props) => {
  let summa = 0;
  props.orders.forEach((card) => (summa += Number.parseFloat(card.price * card.count)));
  return (
    <div>
      {props.orders.map((card) => (
        <Order deleteOrder={props.deleteOrder} deleteCountOrder={props.deleteCountOrder} key={card.id} card={card}/>
      ))}
      <p className='sum'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const ShowNothing = () => {
    return (
    <div className='empty'>
      <h2>Товаров нет :(</h2>
    </div>
  );
};




const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);
  const closeCart = () => {
     setCartOpen(false)
  }
  
  const handleClick = () => {
    let div = document.querySelector('.media_nav')
    let hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");

    div.classList.toggle('active')
    if (div.classList.contains('active')) {
        div.style.display = 'flex'
        div.style.animation = "start 1.5s"
    } else {
        div.style.animation = "end 1.5s"
        setTimeout(() => {
            div.style.display = "none"
        }, 1500)
    }
}
  return (
    <header>
      <div className='Header_Content'>

        <div className='Header_Logo'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <div className='Header_Nav main_nav'>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Menu'>Menu</Link>
              </li>
              <li>
                <Link to='/About'>About</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        

        <div className='Header_Icons nav_media'>
          <div className='Heder_Icons_Container'>
            <div className='icon_container'>
              <AiOutlineHeart className='heart icon' />
            </div>


            <div className='icon_container cart'>
              <AiOutlineShoppingCart
                className={`cart icon shop-cart-btn ${cartOpen && 'active'}`}
                onClick={() => setCartOpen(!cartOpen)}
              />
              
              {cartOpen && (
                <div className='shop-cart'>
                  {props.orders.length > 0 ? (
                    <>
                      <CgCloseO className='close-icon' onClick={closeCart}/>
                      <ShowOrders  {...props} />
                    </>
                  ) : (
                    <>
                      <CgCloseO className='close-icon' onClick={closeCart}/>
                      <ShowNothing />
                    </>
                    
                  )}
                </div>
              )}
            </div>


            <div className='icon_container'>
              <FiSearch className='search icon' />
            </div>
          </div>
          

          <div className='Media_Nav_Container'>

            <button onClick={handleClick} className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

              <div className='Header_Nav media_nav'>
                <nav>
                  <ul>
                    <li>
                      <Link to='/' className='media_li'>Home</Link>
                    </li>
                    <li>
                      <Link to='/Menu' className='media_li'>Menu</Link>
                    </li>
                    <li>
                      <Link to='/About' className='media_li'>About</Link>
                    </li>
                    <li>
                      <Link to='/Contact' className='media_li'>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React , {useState} from 'react';
import { Routes, Route, } from 'react-router-dom';
import {HomePage} from './Pages/HomePage/HomePage';
import { Menu } from './Pages/Menu/Menu';
import {About} from "./Pages/About/About"
import {Contact} from './Pages/Contact/Contact';
import {Order} from "./Pages/Order/Order"
import Header from './Commponents/Header/Header';
import Footer from './Commponents/Footer/Footer';
  const App = () => {


  const scrollTop = () => {
    window.scrollTo(0, 0);
  }

  const scrollBtn = () => {
    let body = document.querySelector('body');
    body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  const [orders, setOrders] = useState([]);

 

  return (
    <div onLoad={scrollTop}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path='/About' element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path='/Order' element={<Order/>}/>
        </Routes>

        <div
          className="arrow_container"
          data-aos="fade-in"
          onClick={scrollBtn}
        >
          <div className="arrow_content">
            <div className="arrow">
              <span></span>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default App;

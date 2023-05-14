import React , {useState} from 'react'
import Header from '../../Commponents/Header/Header'
import Footer from '../../Commponents/Footer/Footer'
import { AboutDescription } from '../../Commponents/About_Description/About_Description';


const logosArr = [
    { id: 1, name: "MasterCard" , link: "https://www.mastercard.ua" },
    { id: 2, name: "Maestro" , link: "https://www.mastercard.ua" },
    { id: 3, name: "Star" , link:"https://www.starbucks.com/" },
    { id: 4, name: "Nestle" , link:"https://www.nestle.ua/" },
    { id: 5, name: "PizzaHut" , link:"https://twitter.com/pizzahut"},
  ];
  
const About = () => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const deleteCountOrder = (count) => {
    setOrders(prevOrders => {
      const newOrders = prevOrders.filter(order => order.count !== count);
      return newOrders;
    });
    localStorage.removeItem('orders')
  };
  return (
    <div className='About_Container'>
        <div className='About_Content'>
          <Header orders={orders} deleteOrder={deleteOrder} deleteCountOrder={deleteCountOrder} />  
               <AboutDescription logosArr={logosArr} /> 
            <Footer/>
        </div>
    </div>
  )
}

export {About}
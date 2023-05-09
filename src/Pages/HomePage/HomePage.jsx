import React , {useState} from 'react'
import Header from '../../Commponents/Header/Header'
import Quality from '../../Commponents/Quality/Quality'
import Location from '../../Commponents/Location/Location'
import Reviews from '../../Commponents/Reviews/Reviews'
import Footer from '../../Commponents/Footer/Footer'
const HomePage = () => {

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
    <div className='HomePage_Container'>
        <div className='HomePage_Content'>
          <Header orders={orders} deleteOrder={deleteOrder} deleteCountOrder={deleteCountOrder} />  
            <Quality/>
            <Location/>
            <Reviews/>
            <Footer/>
        </div>
    </div>
  )
}

export {HomePage}
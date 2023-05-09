import React , {useState} from 'react'
import Header from '../../Commponents/Header/Header'
import Footer from '../../Commponents/Footer/Footer'
import Contact_Info from '../../Commponents/Contact_Info/Contact_Info'
const Contact = () => {
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
    <div className='Contact_Container'>
      <div className='Contact_Content'>
        <Header orders={orders} deleteOrder={deleteOrder} deleteCountOrder={deleteCountOrder} /> 
            <Contact_Info/>
        <Footer/>
    </div>
</div>
  )
}

export {Contact}
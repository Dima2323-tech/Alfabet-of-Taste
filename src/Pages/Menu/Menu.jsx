import React , {useState , useEffect} from 'react'
import AllCards from '../../Commponents/AllCards/AllCards'
import CardInfo from '../../Commponents/CardInfo/CardInfo'
import Header from '../../Commponents/Header/Header'
import Footer from '../../Commponents/Footer/Footer'
const Menu = () => {

 
  const [menuArr , setMenuArr] = useState( [
  
    {
      id:1,
      title: "Pancakes with syrup",
      img: "pancakes.png",
      desc: "Delicious pancakes cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "9.99",
      count: 0
    },
    {
      id:2,
      title: "Pizza 4 carne",
      img: "pizza.png",
      desc: "Delicious pizza cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "10.99",
      count: 0
    },
    {
      id:3,
      title: "Salad Alphabet",
      img: "salad.png",
      desc: "Delicious salad cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "9.99",
      count: 0
    },
    {
      id:4,
      title: "Pached Eggs",
      img: "eggs.png",
      desc: "Delicious eggs cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "8.99",
      count: 0
    },
    {
      id:5,
      title: "Pancakes with syrup",
      img: "pancakes.png",
      desc: "Delicious pancakes cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "9.99",
      count: 0
    },
    {
      id:6,
      title: "Pizza 4 carne",
      img: "pizza.png",
      desc: "Delicious pizza cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "10.99",
      count: 0
    },
    {
      id:7,
      title: "Salad Alphabet",
      img: "salad.png",
      desc: "Delicious salad cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "9.99",
      count: 0
    },
    {
      id:8,
      title: "Pached Eggs",
      img: "eggs.png",
      desc: "Delicious eggs cooked according to an old recipe will not leave anyone indifferent, once you try it, you will never stop",
      price: "8.99",
      count: 0
    },
    
  ])
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [currentItems, setCurrentItems] = useState([]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });


  const onShowItem = (card) => {
    setFullItem(card);
    setShowFullItem(!showFullItem);

  };

  const countOrder = (count) => {
    setMenuArr(menuArr.filter(el => el.count !== "0"));
  }

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
    const index = orders.findIndex(order => order.id === id)
    console.log(index)
    if(index !== -1 ){
      orders.splice(index , 1)
    }

    localStorage.setItem("orders" , JSON.stringify(orders))
  };

  const deleteCountOrder = (count) => {
    setOrders(prevOrders => {
      const newOrders = prevOrders.filter(order => order.count !== count);
      return newOrders;
    });
  };

  const addToOrder = (card) => {
    setOrders(prevOrders => {
      const newOrders = [...prevOrders];
      const index = newOrders.findIndex(order => order.id === card.id);
      if (index >= 0) {
        newOrders[index] = { ...newOrders[index], count: newOrders[index].count + 1 };
      } else {
        newOrders.push({ ...card, count: 1 });
      }
      localStorage.setItem('orders', JSON.stringify(newOrders)); // сохраняем данные в localStorage
      return newOrders;
    });
  };

  useEffect(() => {
    setCurrentItems(menuArr);
  }, [menuArr]);

  return (
    <div className='Menu_Container'>
        <div className='Menu_Content'>
        <Header orders={orders} deleteOrder={deleteOrder} deleteCountOrder={deleteCountOrder} onShowItem={onShowItem} />
              <AllCards onShowItem={onShowItem} menuArr={menuArr} orders={orders} addToOrder={addToOrder} countOrder={countOrder}/>
              {showFullItem && <CardInfo card={fullItem} onShowItem={onShowItem} addToOrder={addToOrder} countOrder={countOrder} />}
        </div>
        <Footer/>
    </div>
  )
}

export {Menu}
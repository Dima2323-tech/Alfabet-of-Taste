import React , {useState} from 'react'
import {FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom';

const Order = (props) => {

    const citiesUkraine = [
        "Киев",
        "Харьков",
        "Одесса",
        "Днепр",
        "Донецк",
        "Запорожье",
        "Львов",
        "Кривой Рог",
        "Николаев",
        "Мариуполь",
        "Винница",
        "Херсон",
        "Полтава",
        "Чернигов",
        "Черкассы",
        "Житомир",
        "Сумы",
        "Хмельницкий",
        "Ровно",
        "Кировоград",
        "Ивано-Франковск",
        "Тернополь",
        "Ужгород",
        "Луцк",
        "Мукачево",
        "Севастополь",
    ]

    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });
    
    const getOrderField = () => {
        const orderData = orders.map((order) => {
            return  `${order.title}: ${order.count} \n Сумма:${summa}`
            
        }).join(", ");
        
        return (
          <input
            type="hidden"
            name="order"
            value={orderData}
          />
        );
      };


      const ShowNothing = () => {
        return (
        <div className='empty'>
          <h2>There are no products :(</h2>
          <Link to="/Menu">
            Let's choose what to order
          </Link>
        </div>
      );
    };
      
      
      

    let summa = 0;
    orders.forEach((card) => (summa += Number.parseFloat(card.price * card.count)));

    
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

      
    return (
      
      <div className='Order_Container'>

      <div className='Order_Content'>

        {orders.length > 0 ? (

          <>

            <div className='Order_List'>

              {orders.map((el) => (

                <div className='Order' key={el.id}>

                  <div className='Order_Img'>

                    <img src={"./img/" + el.img} alt='order_img'/>

                  </div>

                  <div className='Order_Info'>

                    <h2>{el.title}</h2>
                    <div>x{el.count}</div>
                    <div>{el.price} $</div>

                  </div>

                  <FaTrash className='delete-icon' onClick={() => {
                    deleteOrder(el.id)
                    deleteCountOrder(el.count = '0')
                  }}/> 

                </div>

              ))}

            </div>

            <form className='Order_Client' action="https://getform.io/f/f6e7260f-9018-4f14-b8a4-c1b7286c7a3a" method="POST">

              <div className="Order_Client_Inps">

                <div className="Order_Client_Inps_ Name">
                  <span>Name</span>
                  <input placeholder="Name" name="name"/>
                </div>

                <div className="Order_Client_Inps_ Phone">
                  <span>Phone</span>
                  <input placeholder="Phone" name="phone"/>
                </div>

                <div className="Order_Client_Inps_ Email">
                  <span>Email</span>
                  <input placeholder="Phone" name="email"/>
                </div>

                <div className="Order_Client_Inps_ City">

                  <span>Your City</span>

                  <input placeholder="City" list='city' name="city"/>

                  <datalist id="city">
                    {citiesUkraine.map((el) => (
                      <option value={el}/>
                    ))}
                  </datalist>

                </div>

                <input type="hidden" name="order"/>

                <div className="Order_Client_Inps_ Street">
                  <span>Your street</span>
                  <input placeholder="Street" name="street"/>
                </div>

              </div>

              {getOrderField()}

              <div className="Order_Client_BtnS">

                <div>Sum: {summa}</div>
                
                <button type='submit'>
                  Make Order
                </button>

              </div>

            </form>
          </>
        ) : (
          <ShowNothing/>
        )}
      </div>
    </div>
    )
        }    

export { Order }



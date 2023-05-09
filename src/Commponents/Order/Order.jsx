import React from 'react';
import { FaTrash } from 'react-icons/fa';
import {CgCloseO} from 'react-icons/cg'
const Order = (props) => {
  const {card , } = props
  return (
    <div className='item-order'>
      <img src={"./img/" + card.img}/>
      <h2>{card.title}</h2>
      <b>{new Intl.NumberFormat().format(card.price * card.count)}$</b>
      <p className='item-count'>x {card.count}</p>
      <FaTrash className='delete-icon' onClick={() => {
        props.deleteOrder(card.id)
        props.deleteCountOrder(card.count = '0')
      }}/> 
    </div>
  )
}

export default Order;
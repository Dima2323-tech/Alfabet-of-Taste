import React from 'react';
import { CgCloseO } from 'react-icons/cg';
import face from "../../img/Face.png"
const CardInfo = (props) => {
  const { card, onShowItem , countOrder , addToOrder} = props;
  return (
    <div className='full-item'>
      <div className='full-item-content'>

        <div className='full-item-close'>
          <CgCloseO onClick={() => onShowItem(card)} />
        </div>

        <h2>{card.title}</h2>

        <p>{card.price}$</p>

        <div className='Photo_Container'>
            <img className='Img_Food' src={`./img/${card.img}`} alt='Img_Food'></img>
        </div>
        
        <p>{card.desc}</p>

        <div className='Photo_Container'>
            <img className='Img_Smile' src={face} alt='Img_Face'></img>
        </div>

        <div className='addCart' onClick={() => {
            addToOrder(card);
            countOrder(card.count++);
            onShowItem(card);
          }}>+</div>
        
        </div>
      </div>
  );
};

export default CardInfo;
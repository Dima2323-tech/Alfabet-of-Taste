import React from 'react'

const Card = (props) => {


const {card , onShowItem , addToOrder , countOrder} = props
const handleClick = () => {
    addToOrder(card);
    countOrder(card.count += 1);

  }
  return (
     <div className='Card_Container'>

        <div className='Card_Content'>

            <div className='Card_Photo'>
                <img src={`./img/${card.img}`} alt="card_photo"/>

            </div>

            <div className='Card_Name'>
                <span>{card.title}</span>
            </div>

            <div className='Card_Price'>
                <span>{card.price}</span>
            </div>

            <div className='Card_Add_Cart'>
                <div className='Add_Btn' onClick={handleClick}>
                    <span className='Add_Btn_Text'>+</span>
                </div>
            </div>

            <div className='Card_Info'>
                <div className='Info_Btn' addToOrder={props.addToOrder} onClick={() => onShowItem(card)}>
                    <span className='Info_Btn_Text'>i</span>
                </div>
            </div>

        </div>
     </div>
  )
}

export default Card
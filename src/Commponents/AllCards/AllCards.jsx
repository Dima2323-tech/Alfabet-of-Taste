import React from 'react';
import Card from '../Card/Card';

const AllCards = (props) => {
  return (
    <div className='AllCards_Container'>
      <div className='AllCards_Content'>
        {props.menuArr.map(el => (
          <Card key={el.id} card={el} onShowItem={props.onShowItem} addToOrder={props.addToOrder} countOrder={props.countOrder}/>
        ))}
        
      </div>
    </div>
  );
};

export default AllCards;


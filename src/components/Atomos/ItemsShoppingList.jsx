import React from 'react';
import Icons from './Icons';
import '../../assets/styles/components/Atomos/ItemShoppingList.scss';

const ItemShoppingList = (props) => {
  const { key, title, amount, price, priceTotal } = props;
  return (
    <div className='ItemShoppingList' key={key}>
      <div>{title}</div>
      <div>{amount}</div>
      <div>{price}</div>
      <div>{priceTotal}</div>
      <Icons type='delete' />
    </div>
  );
};

export default ItemShoppingList;


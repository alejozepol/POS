import React from 'react';
import Icons from './Icons';
import '../../assets/styles/components/Atomos/ItemShoppingList.scss';
import Button from './Button';

const ItemShoppingList = (props) => {
  const { id, title, amount, price, priceTotal, onClick } = props;
  return (
    <div className='ItemShoppingList' key={id}>
      <div>{title}</div>
      <div>{amount}</div>
      <div>{price}</div>
      <div>{priceTotal}</div>
      <Button onClick={onClick}>
        <Icons type='delete' />
      </Button>
    </div>
  );
};

export default ItemShoppingList;


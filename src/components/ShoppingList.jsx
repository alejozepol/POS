import React from 'react';
import Icons from './Atomos/Icons';
import '../assets/styles/components/ShoppingList.scss';

const ShoppingList = ({ children }) => {
  return (
    <section className='ShoppingList'>
      <div className='ShoppingList__title'>
        <h4>Descripción Producto</h4>
        <h4>Cantidad</h4>
        <h4>Valor Unitario</h4>
        <h4>Valor Total</h4>
        <Icons type='delete' />
      </div>
      <div className='ShoppingList__items'>
        {children}
      </div>
    </section>
  );
};

export default ShoppingList;

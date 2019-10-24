import React from 'react';
import Icons from './Atomos/Icons';
import Button from './Atomos/Button';
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
      <div className='ShoppingList__footer'>
        <div className='ShoppingList__total'>
          <div>
            <h4>Subtotal</h4>
            <h4>Impuesto</h4>
            <h4>Total</h4>
          </div>
          <div>
            <p>222</p>
            <p>222</p>
            <p>222</p>
          </div>
        </div>
        <div className='ShoppingList__pago'>
          <Button type='aceptar'>Pagar</Button>
        </div>
      </div>
    </section>

  );
};

export default ShoppingList;

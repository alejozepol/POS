import React from 'react';
import Icons from './Atomos/Icons';
import Button from './Atomos/Button';
import '../assets/styles/components/ShoppingList.scss';
import Input from './Atomos/Input';

const ShoppingList = ({ children, onClick, subtotal }) => {
  const impuesto = subtotal * 0.19;
  const total = subtotal + impuesto;
  return (
    <section className='ShoppingList'>
      <div className='ShoppingList__client'>
        <Input category='cuadrado' name='identificacion' />
        <Input category='cuadrado' name='Nombres y Apellidos' />
        <Button type='redondo-aceptacion'>
          <Icons type='check' />
        </Button>
      </div>
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
            <p>{subtotal}</p>
            <p>{impuesto}</p>
            <p>{total}</p>
          </div>
        </div>
        <div className='ShoppingList__pago'>
          <Button type='aceptar' onClick={onClick}>Pagar</Button>
        </div>
      </div>
    </section>

  );
};

export default ShoppingList;

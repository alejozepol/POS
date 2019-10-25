/* eslint-disable no-param-reassign */
import React from 'react';
import { connect } from 'react-redux';
import { addToCart, deleteToCart } from '../actions';
import CardProducts from '../components/Atomos/CardProducts';
import ShoppingList from '../components/ShoppingList';
import ItemShoppingList from '../components/Atomos/ItemsShoppingList';
import Button from '../components/Atomos/Button';
import Input from '../components/Atomos/Input';
import Modal from '../components/Atomos/Modal';
import '../assets/styles/Caja.scss';

const Caja = (props) => {
  const { products, cart, subtotal } = props;
  let modal = false;
  const hanldAddToCart = (product) => {
    props.addToCart(product);
  };

  const handleDeleteToCard = (item) => {
    props.deleteToCart(item);
    products.map((product) => {
      if (item.id === product.id) {
        item.amount = 0;
      }
    });
  };

  const viewModal = () => {

    modal ? modal = false : modal = true;
    console.log(modal);
  };

  return (
    <section className='Caja'>
      {modal && (
        <Modal>
          <h3>Modalidad de Pago</h3>
          <Button type='aceptar'>
            Efectivo
          </Button>
          <Button type='segundario'>
            Tarjeta de Credito
          </Button>
          <Button type='contraste'>
            Tarjeta Debito
          </Button>
        </Modal>
      )}
      <div className='Caja__title'>
        <h3>Caja</h3>
      </div>
      <div className='Caja__products__title'>
        <div className='Caja__products__title__btn'>
          <Input name='Buscar' />
        </div>
        <h4>Lista de Productos</h4>
      </div>
      <div className='Caja__compras__title'>
        <div className='Caja__compras__title__btn'>
          <Button type='lg'>Codigo de Barras</Button>
          <Button type='lg'>Cierre de Caja</Button>
        </div>
        <h4>Lista de Compras</h4>
      </div>
      <div className='Caja__products'>
        {products.map((product) => (
          <CardProducts
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            onclick={() => hanldAddToCart(product)}
          />
        ))}
      </div>
      <div className='Caja__compras'>
        <ShoppingList subtotal={subtotal} onClick={() => viewModal(modal)}>
          {cart.map((item) => {
            return (
              <ItemShoppingList
                key={item.id}
                title={item.title}
                amount={item.amount}
                price={item.price}
                priceTotal={item.price * item.amount}
                onClick={() => handleDeleteToCard(item)}
              />
            )
          })}
        </ShoppingList>
      </div>
    </section>
  );

};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    subtotal: state.subtotal,
  };
};

const mapDispatchToProps = {
  addToCart,
  deleteToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Caja);

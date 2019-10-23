import React from 'react';
import { connect } from 'react-redux';
import CardProduts from '../components/Atomos/CardProducts';
import '../assets/styles/Caja.scss';
import ShoppingList from '../components/ShoppingList';
import ItemShoppingList from '../components/Atomos/ItemsShoppingList';

const Caja = (props) => {
  const { products, cart } = props;

  return (
    <section className='Caja'>
      <div className='Caja__title'><h3>Caja</h3></div>
      <div className='Caja__products'>
        {products.map((product) => (
          <CardProduts
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
      <div className='Caja__compras'>
        <ShoppingList>
          {cart.map((item) => (<ItemShoppingList key={item.id} title={item.title} amount={item.amount} price={item.price} priceTotal={item.priceTotal} />))}
        </ShoppingList>
      </div>
    </section>
  );

};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(Caja);

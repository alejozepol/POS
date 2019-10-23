import React from 'react';
import '../../assets/styles/components/Atomos/CardProducts.scss';
import Button from './Button';
import Icons from './Icons';

const CardProducts = ({ key, img, title, price, description }) => {

  return (
    <div className='CardProducts' key={key}>
      <div className='CardProducts__img'>
        <img src={img} alt={title} />
      </div>
      <div className='CardProducts__info'>
        <h4>{title}</h4>
        <p>
          $
          {price}
        </p>
        <small>{description}</small>
      </div>
      <div className='CardProducts__btn'>
        <Button type='redondo-aceptacion'>
          <Icons type='check' />
        </Button>
      </div>
    </div>
  );
};

export default CardProducts;

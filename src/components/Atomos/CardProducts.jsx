import React from 'react';
import '../../assets/styles/components/Atomos/CardProducts.scss';

const CardProduts = ({ key, img, title, price, description }) => {

  return (
    <div className='CardProduts' key={key}>
      <div className='CardProduts__img'>
        <img src={img} alt={title} />
      </div>
      <div className='CardProduts__info'>
        <h4>{title}</h4>
        <p>
          $
          {price}
        </p>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default CardProduts;

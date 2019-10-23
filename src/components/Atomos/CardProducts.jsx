import React from 'react';
import '../../assets/styles/components/Atomos/CardProducts.scss';

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
    </div>
  );
};

export default CardProducts;

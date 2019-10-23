import React from 'react';
import Button from './Button';
import Icons from './Icons';
import '../../assets/styles/components/Atomos/CardProducts.scss';

const CardProducts = (props) => {
 const { key, img, title, price, description, onclick } = props;
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
        <Button type='redondo-aceptacion' onClick={onclick}>
          <Icons type='check' />
        </Button>
      </div>
    </div>
  );
};

export default CardProducts;

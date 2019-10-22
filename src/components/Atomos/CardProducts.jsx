import React from 'react';

const CardProduts = ({ img, title, prime, primeGram }) => {

  return (
    <div className='CardProduts'>
      <div className='CardProduts__img'>
        <img src={img} alt={img} />
      </div>
      <div className='CardProduts__info'>
        <h4>{title}</h4>
        <p>
          $
          {prime}
        </p>
        <small>{primeGram}</small>
      </div>
    </div>
  );
};

export default CardProduts;

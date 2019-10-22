import React from 'react';
import '../../assets/styles/components/Atomos/Button.scss';

const Button = ({ type, children }) => {
  switch (type) {
    case 'redondo-aceptacion':
      return (<button type='submit' className='Button Button--redondo--aceptacion'>{ children }</button>);
    case 'lg':
      return (<button type='button' className='Button Button--lg'>{ children }</button>);
    case 'lg-img':
      return (<button type='button' className='Button Button--lg--img'>{ children }</button>);
    default:
      return (<button type='button' className='Button Button--redondo'>{ children }</button>);

  }
};

export default Button;

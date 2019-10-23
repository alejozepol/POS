import React from 'react';
import '../../assets/styles/components/Atomos/Button.scss';

const Button = (props) => {
  const { type, children, onClick } = props;
  switch (type) {
    case 'redondo-aceptacion':
      return (<button type='submit' onClick={onClick} className='Button Button--redondo--aceptacion'>{ children }</button>);
    case 'lg':
      return (<button type='button' onClick={onClick} className='Button Button--lg'>{ children }</button>);
    case 'lg-img':
      return (<button type='button' onClick={onClick} className='Button Button--lg--img'>{ children }</button>);
    case 'aceptar':
      return (<button type='button' onClick={onClick} className='Button Button--aceptar'>{ children }</button>);
    default:
      return (<button type='button' onClick={onClick} className='Button bg-transparent'>{ children }</button>);

  }
};

export default Button;

import React from 'react';
import '../../assets/styles/components/Atomos/Input.scss';

const Input = ({ type, name }) => {
  switch (type) {
    case 'top':
      return (<input placeholder={name} className='Input Input--top' />);
    case 'bottom':
      return (<input placeholder={name} className='Input Input--bottom' />);
    case 'cuadrado':
      return (<input placeholder={name} className='Input Input--cuadrado' />);
    default:
      return (<input placeholder={name} className='Input Input--default' />);

  }
};

export default Input;

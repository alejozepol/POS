import React from 'react';
import '../../assets/styles/components/Atomos/Input.scss';

const Input = ({ category, type, name, onchange }) => {
  switch (category) {
    case 'top':
      return (
        <input
          name={type}
          placeholder={name}
          type={type}
          className='Input Input--top'
          onChange={onchange}
        />
      );
    case 'bottom':
      return (
        <input
          name={type}
          placeholder={name}
          type={type}
          className='Input Input--bottom'
          onChange={onchange}
        />
      );
    case 'cuadrado':
      return (
        <input
          name={type}
          placeholder={name}
          type={type}
          className='Input Input--cuadrado'
          onChange={onchange}
        />
      );
    default:
      return (
        <input
          name={type}
          placeholder={name}
          type={type}
          className='Input Input--default'
          onChange={onchange}
        />
      );

  }
};

export default Input;

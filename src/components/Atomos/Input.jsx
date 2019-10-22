import React from 'react';
import '../../assets/styles/components/Atomos/Input.scss';

const Input = ({ category, type, name, onchange, requiered }) => {
  switch (category) {
    case 'top':
      return (
        requiered ? (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--top'
            onChange={onchange}
            required
          />
        ) : (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--top'
            onChange={onchange}
          />
        )
      );
    case 'bottom':
      return (
        requiered ? (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--bottom'
            onChange={onchange}
            required
          />
        ) : (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--bottom'
            onChange={onchange}
          />
        )
      );
    case 'cuadrado':
      return (
        requiered ? (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--cuadrado'
            onChange={onchange}
            required
          />
        ) : (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--cuadrado'
            onChange={onchange}
          />
        )
      );
    default:
      return (
        requiered ? (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--default'
            onChange={onchange}
            required
          />
        ) : (
          <input
            name={type}
            placeholder={name}
            type={type}
            className='Input Input--default'
            onChange={onchange}
          />
        )

      );

  }
};

export default Input;

import React from 'react';
import LogoCliente from '../assets/static/LogoCliente.png';

import '../assets/styles/components/Header.scss';
import Icons from './Atomos/Icons';

const Header = () => {
  return (
    <section className='Header'>
      <img className='Header-img' src={LogoCliente} alt='Logo Cliente' />
      <ul className='Header__Menu'>
        <li className='Header__Menu__item'>
          <Icons type='caja' />
        </li>
        <li className='Header__Menu__item'>
          <Icons type='inventario' />
        </li>
      </ul>
    </section>
  );
};

export default Header;

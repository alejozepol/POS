import React from 'react';
import LogoCliente from '../assets/static/LogoCliente.png';
import IcoCaja from '../assets/static/IcoCaja.png';
import IcoInventario from '../assets/static/IcoInventario.png';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <section className='Header'>
      <img className='Header-img' src={LogoCliente} alt='Logo Cliente' />
      <ul className='Header__Menu'>
        <li className='Header__Menu__item'>
          <img className='Header-img' src={IcoCaja} alt='Logo Cliente' />
        </li>
        <li className='Header__Menu__item'>
          <img className='Header-img' src={IcoInventario} alt='Logo Cliente' />
        </li>
      </ul>
    </section>
  );
};

export default Header;

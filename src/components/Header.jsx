import React from 'react';
import LogoCliente from '../assets/static/LogoCliente.png';

const Header = () => {
  return (
    <section>
      <img src={LogoCliente} alt='Logo Cliente' />
    </section>
  );
};

export default Header;

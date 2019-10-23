import React from 'react';
import IcoGoogle from '../../assets/static/LogoGoogle.png';
import IcoFacebook from '../../assets/static/LogoFacebook.png';
import IcoCaja from '../../assets/static/IcoCaja.png';
import IcoInventario from '../../assets/static/IcoInventario.png';
import '../../assets/styles/components/Atomos/Icons.scss';

const Icons = ({ type }) => {
  switch (type) {
    case 'check':
      return (<i className='material-icons'> check </i>);
    case 'delete':
      return (<i className='material-icons'> delete </i>);
    case 'google':
      return (<img className='Icons--img' src={IcoGoogle} alt='Logo Caja' />);
    case 'facebook':
      return (<img className='Icons--img' src={IcoFacebook} alt='Logo Caja' />);
    case 'caja':
      return (<img className='Icons--img' src={IcoCaja} alt='Logo Caja' />);
    case 'inventario':
      return (<img className='Icons--img' src={IcoInventario} alt='Logo Inventario' />);
    default:
      return (<button type='button' className='Button Button--redondo'>{children}</button>);

  }
};

export default Icons;

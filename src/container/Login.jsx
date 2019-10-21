import React from 'react';
import ImgPrimary from '../components/Atomos/ImgPrimary';
import PromoLogin from '../assets/static/PromoLogin.png';
import ContentForm from '../components/Atomos/ContentForm';
import '../assets/styles/components/Login.scss';
import Input from '../components/Atomos/Input';

const Login = () => {
  return (
    <section className='Login'>
      <ImgPrimary src={PromoLogin} alt='PromoLogin' />
      <ContentForm title='Ingreso'>
        <from>
          <Input type='top' name='Correo Electronico' />
          <Input type='bottom' name='Contraseña' />
        </from>
      </ContentForm>
    </section>
  );
};

export default Login;

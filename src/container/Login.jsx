import React from 'react';
import ImgPrimary from '../components/Atomos/ImgPrimary';
import PromoLogin from '../assets/static/PromoLogin.png';
import ContentForm from '../components/Atomos/ContentForm';
import Input from '../components/Atomos/Input';
import Button from '../components/Atomos/Button';
import '../assets/styles/components/Login.scss';

const Login = () => {
  return (
    <section className='Login'>
      <ImgPrimary src={PromoLogin} alt='PromoLogin' />
      <ContentForm title='Ingreso'>
        <from className='Login__Form'>
          <Input type='top' name='Correo Electronico' />
          <Input type='bottom' name='Contraseña' />
          <div className='btn'>
            <Button type='redondo-aceptacion'>Conte</Button>
          </div>
        </from>
      </ContentForm>
    </section>
  );
};

export default Login;

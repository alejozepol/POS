import React from 'react';
import { Link } from 'react-router-dom';
import ImgPrimary from '../components/Atomos/ImgPrimary';
import PromoLogin from '../assets/static/PromoLogin.png';
import ContentForm from '../components/Atomos/ContentForm';
import Input from '../components/Atomos/Input';
import Button from '../components/Atomos/Button';
import Icons from '../components/Atomos/Icons';
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
            <Button type='redondo-aceptacion'>
              <Icons type='check' />
            </Button>
          </div>
        </from>
        <div className='Login__Register'>
          <h3>No tienes cuenta</h3>
          <Link to='/registro' className='Link'>
            <Button type='lg'>Registrate</Button>
          </Link>
          <Button type='lg-img'>
            <Icons type='google' />
            Google
          </Button>
          <Button type='lg-img'>
            <Icons type='facebook' />
            Facebook
          </Button>
        </div>
      </ContentForm>
    </section>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import ImgPrimary from '../components/Atomos/ImgPrimary';
import PromoRegister from '../assets/static/PromoRegister.png';
import ContentForm from '../components/Atomos/ContentForm';
import Input from '../components/Atomos/Input';
import Button from '../components/Atomos/Button';
import Icons from '../components/Atomos/Icons';
import '../assets/styles/components/Register.scss';

const Register = () => {
  return (
    <section className='Register'>
      <ImgPrimary src={PromoRegister} alt='PromoRegister' />
      <ContentForm title='Registro'>
        <form className='Register__Form'>
          <Input category='top' name='Correo Electronico' type='email' />
          <Input category='cuadrado' name='Nombres' type='text' />
          <Input category='cuadrado' name='Apellidos' type='text' />
          <Input category='bottom' name='Contraseña' type='password' />
          <div className='btn'>
            <Button type='redondo-aceptacion'>
              <Icons type='check' />
            </Button>
          </div>
        </form>
        <Link to='/' className='Link'>
          <Button type='lg'>Ya Tengo cuenta</Button>
        </Link>
      </ContentForm>
    </section>
  );
};

export default Register;

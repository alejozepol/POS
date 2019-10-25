import React from 'react';
import '../../assets/styles/components/Atomos/Modal.scss';
import Icons from './Icons';
import Button from './Button';

const Modal = ({ children, onClick }) => (
  <section className='Modal'>
    <div className='Modal__content'>
      <div className='Modal__content__close'>
        <Button onClick={onClick}>
          <Icons type='close' />
        </Button>
      </div>
      {children}
    </div>
  </section>
);

export default Modal;

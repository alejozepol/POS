import React from 'react';
import '../../assets/styles/components/Atomos/Modal.scss';

const Modal = ({ children }) => (
  <section className='Modal'>
    <div className='Modal__content'>
      {children}
    </div>
  </section>
);

export default Modal;

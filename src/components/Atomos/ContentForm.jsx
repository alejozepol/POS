import React from 'react';
import '../../assets/styles/components/Atomos/ContentForm.scss';

const ContentForm = ({ title, children }) => (
  <div className='ContentForm'>
    <div className='ContentForm__title'>
      <h2>{title}</h2>
    </div>
    <div className='ContentForm__content'>
      {children}
    </div>
  </div>
);

export default ContentForm;

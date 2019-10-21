import React from 'react';
import Header from './Header';
import '../assets/styles/app.scss';

const Layout = ({ children }) => (
  <div className='app'>
    <Header />
    {children}
  </div>
);

export default Layout;

import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
           <Header/>
          <div className='md:min-h-[calc(100vh-150px)]'>
          <Outlet/>
          </div>
           <Footer/>/
        </div>
    );
};

export default Main;
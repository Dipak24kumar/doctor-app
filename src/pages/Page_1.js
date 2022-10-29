import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../assets/images/home-screen.png';

function Page_1() {
  return (
    <section className='home-screen text-center mt-5'>
      <h1 className='mb-4'>Learn CPR and Save a Life</h1>
      <p>Train for the moments that could matter !!</p>
      <img src={homeLogo} alt='logo' className='img-fuild d-block' />
      <Link className='home-btn' to='/page2'>START</Link>
      <p className='content-para'>Aditya Kapoor <br/> Prof and Head, Dept of Cardiology SGPGIMS, Lucknow</p>
    </section>
  ) 
}

export default Page_1
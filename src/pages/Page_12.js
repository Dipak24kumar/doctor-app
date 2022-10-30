import React from 'react';
import Tabs from '../components/Tabs';
import twohand from '../assets/images/twohand.png';
import breathing from '../assets/images/breathing.png';
import heartwave from '../assets/images/heart-wave.png';

function Page_12() { 
    return (
        <>
            <section className='page-cover text-center'>
                <img src={twohand} alt='Twohand' title='Twohand' className='img-fuild d-block text-left opacity hand-img' />
                <button className="default-btn mb-3 mt-5" alt="">
                How can I be sure that the person who collapsed has had a cardiac arrest?
                </button> 
                <h1 className='mb-4'>Remember the Acronym “CPR”</h1>

                <div className='content-border_box'>
                    <p className='borderBottom'>Check response: Tap cheek or shoulders and call out loudly</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Less than 1% such victims survive due to minimal public awareness  on how to handle such emergencies</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'> Check the person’s Pulse</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Check the person’s Respiration (breathing)</p>
                    <div className='partition'></div>
                </div>
                <img src={breathing} alt='Breathing' title='Breathing' className='breathing-img img-fuild d-block text-left' />
                <img src={heartwave} alt='Heart Wave' title='Heart Wave' className='heartwave-img-left img-fuild d-block ' />
            </section>
            <Tabs />
        </>
    )
}

export default Page_12;





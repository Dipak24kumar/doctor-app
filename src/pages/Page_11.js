import React from 'react';
import Tabs from '../components/Tabs';
import twohand from '../assets/images/twohand.png';
import doctorHelpBreathing from '../assets/images/doctor-helpbreathing.png';
import ambulence from '../assets/images/ambulence.png';
import check from '../assets/images/check.png';
import highwave from '../assets/images/highwave.png';
import highbreathing from '../assets/images/right-breathing.png';
import hightwaverate from '../assets/images/hightwaverate.png';
import heart from '../assets/images/low-heart.png';



function Page_11() {
  return (
    <>
      <section className='page-cover text-center'>
        <h1 className=' mt-4 mb-5'> A Brief Recap of what you've learnt</h1>
        <div class="accordion card-container" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How can I be sure that the person who collapsed has had a cardiac arrest?
              </button>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body card_one">
                <img src={twohand} alt='Twohand' title='Twohand' className='img-fuild d-block text-left opacity hand-img' />
                <img src={doctorHelpBreathing} alt='doctorHelpBreathing' title='doctorHelpBreathing' className='doctor_breathing-img img-fuild d-block text-left' />
                
                <h5>Remember the Acronym “CPR”</h5>
                <div className='content-border_box'>
                    <p className='borderBottom'>Check response: Tap cheek or shoulders and call out loudly</p>
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
              </div> 
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                What are the 4 basic steps of CPR
              </button>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body card_one">
                <img src={check} alt='check' title='check' className='img-fuild d-block text-left check-img' />
                <img src={ambulence} alt='ambulence' title='ambulence' className='ambulence-img img-fuild d-block' />
              
                <div className='content-border_box'>
                    <p className='borderBottom'>Recognise cardiac arrest</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Give CPR and Call for help</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Call for an AED if present </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Shift to hospital </p>
                    <div className='partition'></div>
                </div>
              </div> 
            </div>
          </div>
          <div class="card ">
            <div class="card-header" id="headingThree">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                What are the basic Rules of CPR?
              </button>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body card_one">
                <img src={highwave} alt='highwave' title='highwave' className='img-fuild d-block text-left  highwave-img' />
                <img src={highbreathing} alt='highbreathing' title='highbreathing' className='highbreathing-img img-fuild d-block' />
              
                <div className='content-border_box'>
                    <p className='borderBottom'>Start CPR @ 100-120/min</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Go down at least 5 cm or 2 inches</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Be sure to let the chest rise between compressions</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Continue CPR till medical help or AED arrives or patient is revived </p>
                    <div className='partition'></div>
                </div>
            </div> 
            </div>
          </div>
          <div class="card ">
            <div class="card-header" id="headingFour">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
              Can only doctors and nurses perform CPR?
              </button>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div class="card-body">
              <div className='content-border_box mt-4'>
                    <p className='borderBottom'>No: Anyone who has been trained in CPR can and should perform it in an emergency</p>
                    <div className='partition'></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card ">
            <div class="card-header" id="headingFive">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
              What is Hands-Only CPR?
              </button>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body card_one">
                <img src={hightwaverate} alt='hightwaverate' title='hightwaverate' className='img-fuild d-block text-left  highwave-img' />
                <img src={heart} alt='heart' title='heart' className='highbreathing-img img-fuild d-block' />
              
                <div className='content-border_box'>
                    <p className='borderBottom'>Hands-Only CPR is CPR without rescue breaths</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>Hands-Only CPR is an easy and effective way for any bystander to save lives </p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>It is as effective as CPR with rescue breaths in the first few minutes during an out of hospital sudden cardiac arrest</p>
                    <div className='partition'></div>
                </div>
                <div className='content-border_box'>
                    <p className='borderBottom'>If you concerned about COVID, cover your face and the person’s face with a face mask or cloth</p>
                    <div className='partition'></div>
                </div>
            </div> 
            </div>
          </div>
          <div class="card ">
            <div class="card-header" id="headingSix">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
              Is my doing CPR safe for the victim
              </button>
            </div>
            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <div class="card-body">
              <div className='content-border_box mt-4'>
                    <p className='borderBottom'>Yes, if performed in the right way, and in the right patient, it is life-saving</p>
                    <div className='partition'></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5">
            <div class="card-header" id="headingSeven">
              <button class="btn-block default-btn mb-3" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
              Are you confident that you can now do CPR?
              </button>
            </div>
            <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
              <div class="card-body">
               <button className="yes-btn mr-4">YES</button>
               <button className="yes-btn">No</button>
              </div>
            </div>
          </div>
        </div>









      </section>
      <Tabs />
    </>
  )
}

export default Page_11;

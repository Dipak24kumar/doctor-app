import React from 'react';
import Tabs from '../components/Tabs';

const btnData = [
  {
    id: '1',
    name: 'How can I be sure that the person who collapsed has had a cardiac arrest?',
    title: 'How can I be sure that the person who collapsed has had a cardiac arrest?'
  },
  {
    id: '2',
    name: 'What are the 4 basic steps of CPR',
    title: 'What are the 4 basic steps of CPR'
  },
  {
    id: '3',
    name: 'What are the basic Rules of CPR?',
    title: 'What are the basic Rules of CPR?'
  },
  {
    id: '4',
    name: 'Can only doctors and nurses perform CPR?',
    title: 'Can only doctors and nurses perform CPR?'
  },
  {
    id: '5',
    name: 'What is Hands-Only CPR?',
    title: 'What is Hands-Only CPR?'
  },
  {
    id: '6',
    name: 'Is my doing CPR safe for the victim',
    title: 'Is my doing CPR safe for the victim'
  },
  {
    id: '7',
    name: 'Are you confident that you can now do CPR?',
    title: 'Are you confident that you can now do CPR?'
  }
]

function Page_11() {
  return (
    <>
      <section className='page-cover text-center'>
        <h1 className=' mt-4 mb-5'> A Brief Recap of what you've learnt</h1>
        {btnData.map((data) => (
          <button className="default-btn mb-3" alt={data.title} key={data.id}>{data.name}</button>
        ))}
      </section>
      <Tabs /> 
    </>
  )
}

export default Page_11;

import React from 'react';
import Tabs from '../components/Tabs';

const btnData = [
  {
    id: '1',
    name: 'Recognise cardiac arrest',
    title: 'Recognise cardiac arrest'
  },
  {
    id: '2',
    name: 'Start CPR and ask someone to callan ambulance',
    title: 'Start CPR and ask someone to callan ambulance'
  },
  {
    id: '3',
    name: 'Ask for an AED (or shock machine) if present',
    title: 'Ask for an AED (or shock machine) if present'
  },
  {
    id: '4',
    name: 'Shift to hospital',
    title: 'Shift to hospital'
  }
]

function Page_10() {
  return (
    <>
      <section className='page-cover text-center'>
        <h1 className=' my-5'> Basic steps of CPR</h1>
        {btnData.map((data) => (
          <button className="default-btn mb-4" alt={data.title} key={data.id}>{data.name}</button>
        ))}
      </section>
      <Tabs />
    </>
  )
}

export default Page_10;

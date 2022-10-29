import React from 'react';
import Tabs from '../components/Tabs';

const btnData = [
  {
    id: '1',
    name: 'What is CPR ?',
    title: 'What is CPR ?'
  },
  {
    id: '2',
    name: 'What is Sudden Cardiac Arrest',
    title: 'What is Sudden Cardiac Arrest'
  },
  {
    id: '3',
    name: 'Heart attack vs Cardiac arrest ?',
    title: 'Heart attack vs Cardiac arrest ?'
  },
  {
    id: '4',
    name: 'Why is it important for Indians to learn CPR ?',
    title: 'Why is it important for Indians to learn CPR ?'
  },
  {
    id: '5',
    name: 'Why is Time of essence ?',
    title: 'Why is Time of essence ?'
  },
  {
    id: '6',
    name: 'Why do YOU need to HELP ?',
    title: 'Why do YOU need to HELP ?'
  },
  {
    id: '7',
    name: 'What is the Good Samaritan Law ?',
    title: 'What is the Good Samaritan Law ?'
  },
  {
    id: '8',
    name: 'What are the 4 basic steps of CPR ?',
    title: 'What are the 4 basic steps of CPR ?'
  },
]

function Page_2() {
  return (
    <>
      <section className='page-cover text-center'>
        <h1 className='mb-4'>What will we learn dfsf</h1>
        {btnData.map((data) => (
          <button className="default-btn mb-3" alt={data.title} key={data.id}>{data.name}</button>
        ))}
      </section>
      <Tabs />
    </>
  )
}

export default Page_2;





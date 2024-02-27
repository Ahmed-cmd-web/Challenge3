/** @format */

import React from 'react'
import AppCard from '../../components/AppCard'
import Homesectiondummydata from '../../content/Homesectiondummydata'
const Section2 = () => {
  return (
    <div id='FirstpageSection2' className='flex flex-col items-center '>
      <h1 className='text-4xl font-bold p-5'>Home Section</h1>
      <div className='grid  w-full gap-y-2 justify-items-center grid-cols-fit300	'>
        {Homesectiondummydata.map((item, index) => (
          <AppCard
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
        <div className='flex w-full py-6 px-2 overflow-x-scroll justify-center  '></div>
      </div>
    </div>
  )
}

export default Section2

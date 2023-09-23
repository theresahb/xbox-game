import React from 'react'
import { services } from '../../data'

const Why = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-4 px-8 pt-24 pb-16 text-center text-naturalColor md:px-0">
            <h1 className='text-2xl font-medium'>Why eXStore?</h1>
            <p className='font-medium'>We are the official Xbox partner in Indonesia that provides official video games.</p>
            <div className="flex flex-col justify-center items-center gap-12 mt-12 md:flex-row">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col justify-center items-center gap-4">
                        <div className="w-16">
                            <img src={service.image} alt="" className='' />
                        </div>
                        <p className='text-sm font-normal'>{service.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Why
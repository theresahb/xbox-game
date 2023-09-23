import React from 'react'
import { popular } from '../../data'

const Popular = () => {
  return (
    <section>
        <div className="flex justify-center pt-8 pb-28 px-8 lg:px-10">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className='text-naturalColor text-lg font-medium md:text-2xl'>Popular Games</h1>
                    <p className='text-primaryColor font-medium text-sm md:text-base'>Browse all games</p>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {popular.map((pop) => (
                        <div key={pop.id} className="flex flex-col justify-between gap-4 bg-white p-3 rounded-md shadow-md cursor-pointer">
                            <div className="">
                                <img src={pop.image} alt="" className='w-[40rem]' />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className='font-medium'>{pop.title}</p>
                                <div className="flex justify-between">
                                    <small className={`${pop.price === 'Free Download' ? 'bg-[#3b44f63a] px-2 py-[.1rem] rounded-sm' : 'p-0'} text-primaryColor font-medium`}>
                                        {pop.price}
                                    </small>
                                    <small className='flex items-center gap-1'>
                                        <span className={`${pop.discount ? 'text-[#FC326F] bg-[#fc326f31] px-1 py-[.1rem]' : 'p-0'} font-medium rounded-sm`}>{pop.discount}</span>
                                        <span className='line-through text-ashColor'>{pop.old}</span>
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular
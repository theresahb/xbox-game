import React from 'react'
import { bests } from '../../data'

const Best = () => {
  return (
    <section>
        <div className="flex justify-center pt-12 pb-28 px-8 lg:px-10">
            <div className="flex flex-col justify-center gap-4">
                <div className="flex justify-between items-center">
                    <h1 className='text-naturalColor text-lg font-medium md:text-2xl'>Best Seller Games</h1>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-4 flex-wrap w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {bests.map((best) => (
                        <div key={best.id} className="flex flex-col justify-between gap-4 bg-white p-3 rounded-md shadow-md cursor-pointer">
                            <div className="">
                                <img src={best.image} alt="" className='w-[40rem]' />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className='font-medium'>{best.title}</p>
                                <div className="flex justify-between">
                                    <small className={`${best.price === 'Free Download' ? 'bg-[#3b44f63a] px-2 py-[.1rem] rounded-sm' : 'p-0'} text-primaryColor font-medium`}>
                                        {best.price}
                                    </small>
                                    <small className='flex items-center gap-1'>
                                        <span className={`${best.discount ? 'text-[#FC326F] bg-[#fc326f31] px-1 py-[.1rem] rounded-sm' : 'p-0'} font-medium `}>{best.discount}</span>
                                        <span className='line-through text-ashColor'>{best.old}</span>
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

export default Best
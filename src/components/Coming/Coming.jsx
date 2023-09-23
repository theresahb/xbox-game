import React from 'react'
import { coming } from '../../data'
import { coming_two } from '../../data'

const Coming = () => {
  return (
    <section className='bg-blackBackground'>
        <div className="flex justify-center pt-8 pb-28">
            <div className="flex flex-col gap-4 px-12 py-20">
                <div className="">
                    <h1 className='text-white text-2xl font-medium'>Coming Soon</h1>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col gap-4">
                        {coming.map((soon) => (
                            <div key={soon.id} className="relative w-full">
                                <div className="w-full">
                                    <img src={soon.image} alt="" className='w-full'  />
                                </div>
                                <div className="absolute bottom-3 left-3 z-20 md:bottom-6 md:left-6">
                                    <div className="flex flex-col gap-4 text-white">
                                        <p className='text-sm md:text-xl'>{soon.title}</p>
                                        <button type="submit"  className='px-3 py-2 bg-transparent w-fit text-xs rounded border border-[#ffffff71]'>
                                            {soon.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {coming_two.map((soon) => (
                            <div key={soon.id} className="relative">
                                <div className="">
                                    <img src={soon.image} alt=""  className='' />
                                </div>
                                <div className="absolute bottom-3 left-3 z-20 md:bottom-6 md:left-6">
                                    <div className="flex flex-col gap-4 text-white">
                                        <p className='text-sm md:text-xl'>{soon.title}</p>
                                        <button type="submit"  className='px-4 py-2 bg-transparent w-fit text-xs rounded border border-[#ffffff71]'>
                                            {soon.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Coming

import React from 'react'
import { genres } from '../../data'

const Genres = () => {
  return (
    <section>
        <div className="flex justify-center py-32 px-8 md:px-4">
            <div className="flex flex-col justify-center gap-8 w-fit">
                <div className="flex justify-between items-center">
                    <h1 className='text-naturalColor text-lg font-medium md:text-2xl'>Games Genres</h1>
                    <p className='text-primaryColor font-medium text-sm md:text-base'>See all genres</p>
                </div>
                <div className="flex justify-center items-center gap-4 flex-wrap text-center">
                    {genres.map((genre) => (
                        <div key={genre.id} className="text-center relative ">
                            <div className="rounded-md overflow-hidden">
                                <img src={genre.image} alt="" className='w-[30rem] md:w-full' />
                            </div>
                            <div className="flex justify-center">
                                <p className='text-white text-center absolute top-[45%]'>{genre.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Genres
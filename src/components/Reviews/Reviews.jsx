import React from 'react'
import { reviews } from '../../data'

const Reviews = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center text-center gap-24 px-12 py-24 lg:p-24">
            <div className="flex flex-col gap-4">
                <h1 className='text-naturalColor text-2xl font-medium'>12.000+ gamers satisfied</h1>
                <p className='text-naturalColor font-medium'>Let's hear what our customers have to say about their satisfaction with our services and products.</p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col justify-center items-center text-center gap-6 bg-white py-8 px-5 rounded-md shadow-lg">
                        <div className="">
                            <img src={review.image} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className='font-medium'>{review.name}</p>
                            <small>{review.text}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Reviews

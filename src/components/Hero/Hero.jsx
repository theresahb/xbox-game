import React from 'react'
import banner from '../../assets/banner.png'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <main>
        <div className="flex flex-col gap-36 px-6 py-8 md:px-20"
        style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
        }}> 
            <Navbar />
            <div className="flex flex-col gap-4 text-white">
                <h1 className='text-5xl font-medium'>MultiVersus</h1>
                <p className='text-lg'>Now officially free to play for all Xbox users.</p>
                <button type="submit" className='px-4 py-2 bg-primaryColor text-sm rounded w-fit mt-4 hover:opacity-90 duration-500'>Get in now</button>
            </div>
        </div>
    </main>
  )
}

export default Hero
import React, { useState } from 'react'
import logo from '../../assets/eXStore.svg'
import { navLinks } from '../../data'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav>
            <div className="flex justify-between items-center text-white">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="hidden md:flex justify-center items-center gap-8">
                    {navLinks.map((nav) => {
                    return (
                        <li key={nav.id} className='flex opacity-80 hover:opacity-100 duration-500'><a href="/" className='flex'>{nav.text} <div className="nav-arrow"><img src={nav.image} alt="" /></div></a></li>
                    )
                    })}
                </ul>
                <div className="hidden md:flex justify-center items-center gap-4">
                    <button type="submit" className='px-4 py-2 bg-primaryColor text-sm rounded hover:opacity-90 duration-500'>Sign up</button>
                    <button type="submit" className='px-4 py-2 bg-transparent  text-sm rounded border border-[#ffffff71]'>Login</button>
                </div>
                <button id="menu-btn" className={`${showLinks ? 'open' : 'hamburger'} block hamburger md:hidden focus:outline-none outline-none`} 
                onClick={toggleLinks}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div className="md:hidden">
                {showLinks && (
                    <div className="absolute flex-col items-center self-end py-8 mt-8 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-8 right-8 drop-shadow-md rounded-md">
                        <ul className='flex flex-col justify-center items-center gap-y-4'>
                            {navLinks.map((nav) => (
                                <li key={nav.id} className='cursor-pointer text-naturalColor text-sm '>
                                    <a href={`#${nav.id}`}>{nav.text}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center items-center gap-4">
                            <button type="submit" className='px-4 py-2 bg-primaryColor text-white text-sm rounded hover:opacity-90 duration-500'>Sign up</button>
                            <button type="submit" className='px-4 py-2 bg-transparent text-naturalColor text-sm rounded border border-naturalColor'>Login</button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
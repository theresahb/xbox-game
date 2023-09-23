import React from 'react'
import logo from '../../assets/eXStore.svg'
import { menuLinks } from '../../data'
import { resourceLinks } from '../../data'
import { socialIcons } from '../../data'

const Footer = () => {
  return (
    <footer className='bg-blackBackground'>
        <div className="flex flex-col gap-24 px-12 pt-24 pb-10 md:px-24">
            <div className="flex flex-col justify-between items-center gap-12 md:items-start md:flex-row">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <p className='text-white'>Menu</p>
                    <ul className='flex flex-col items-center gap-2 md:items-start'>
                        {menuLinks.map((menu) => (
                            <li key={menu.id}><a href="/" className='text-footerColor font-light text-sm'>{menu.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <p className='text-white'>Resources</p>
                    <ul className='flex flex-col items-center gap-2 md:items-start'>
                        {resourceLinks.map((resource) => (
                            <li key={resource.id}><a href="/" className='text-footerColor font-light text-sm'>{resource.text}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <p className='text-white'>Follow us on:</p>
                    <ul className='flex items-center gap-2 md:items-start'>
                        {socialIcons.map((social) => (
                            <li key={social.id}>
                                <a href="/">
                                    <div className="w-8">
                                        <img src={social.image} alt="" />
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center border-t border-[#a0a0a01a] pt-6">
                <small className='text-footerColor text-center'>© 2022 Exstore</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer

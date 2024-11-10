import React from 'react'
import { MdMenu } from "react-icons/md";

const Nevbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center '>
            <div className='text-xl font-medium'>Rida Danish</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#projects'>Projects</a></li>
                <li className='menuLink'><a href='#skillss'>Skills</a></li>
                <li className='menuLink'><a href='#contacts'>Contacts</a></li>
            </ul>
            <MdMenu className='md:hidden' size={30} />

        </div>
      
    </div>
  )
}

export default Nevbar

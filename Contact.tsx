import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl font-bold' data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-grey-600 text-[20px] pt-2' data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a massage by submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <IoMdMail size={40} /> Rida@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <FaPhoneSquareAlt size={40} /> (021) 000-12345
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type='text' 
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type='text' 
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className='bg-transparent border border-accent'
                    id='msg' rows={8}/>
                    <textarea/>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact

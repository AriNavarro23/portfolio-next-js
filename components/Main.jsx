import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-center py-16'>
            <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center flex-col py-16'>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Let's build something together
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Ariel</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%]'>
                    I'm a front-end webdeveloper specializing in building
                    (and occasionally designing) exceptional websites, applications,
                    and everything in between. Currently, I'm focused on building responsive
                    front-end web applications while learning more about the back-end.
                </p>
                <div className='flex items-center justify-between max-w-[330px] py-4'>
                    
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main
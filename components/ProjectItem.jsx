import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//poner en Image en src={backgroundImg}, en h3 poner {title}, en Link poner href{projectUrl}

const ProjectItem = ({/*title, backgroundImg, projectUrl*/}) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src='' alt='/' width='640' height='360' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{/*title*/}</h3>
                <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                <Link href=''>  
                    <p className='text-center p-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
        </div>
    )
}

export default ProjectItem
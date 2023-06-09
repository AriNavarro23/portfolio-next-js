import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>  
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ipsam consequatur architecto recusandae repellat officia iusto, 
                        praesentium, dolorem magni eius ad, iure rerum modi enim? 
                        Quia iure ratione sint at adipisci.
                    </p>
                    <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni recusandae necessitatibus quibusdam facere, itaque aliquam commodi accusantium temporibus at nobis libero asperiores, 
                    vitae tenetur rem sed dolorum deleniti vero in.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' width='500' height='500' src="/../public/images/laptopBlack.jpg" alt="laptop black" />
                </div>
            </div>
        </div>
    )
}

export default About
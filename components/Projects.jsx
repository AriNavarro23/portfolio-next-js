import React from 'react';
import Image from 'next/image';
// import propertyImg from '../public/assets/projects/1.png';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5652e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='Project 1'
                        backgroundImg=''
                        projectUrl='/project1'
                    />

                    <ProjectItem title='Project 1'
                        backgroundImg=''
                        projectUrl='/project1'
                    />

                    <ProjectItem title='Project 1'
                        backgroundImg=''
                        projectUrl='/project1'
                    />

                    <ProjectItem title='Project 1'
                        backgroundImg=''
                        projectUrl='/project1'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
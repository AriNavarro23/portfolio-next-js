import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Todolist from '../public/assets/projects/todolist.png';
import Password from '../public/assets/projects/password.png';
import Crud from '../public/assets/projects/crud.png';
import Weather from '../public/assets/projects/weather.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5652e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='To do list App'
                        backgroundImg={Todolist}
                        projectUrl='/project1'
                    />

                    <ProjectItem title='Password Generator App'
                        backgroundImg={Password}
                        projectUrl='/project1'
                    />

                    <ProjectItem title='Crud App'
                        backgroundImg={Crud}
                        projectUrl='/project1'
                    />

                    <ProjectItem title='Weather App'
                        backgroundImg={Weather}
                        projectUrl='/project1'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
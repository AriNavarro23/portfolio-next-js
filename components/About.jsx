import React from 'react'

function About() {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-ols-3 gap-8'>  
                <div className='col-span-2'>
                    <p>About</p>
                    <h2>Who I am</h2>
                    <p>// I am not your normal developer</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ipsam consequatur architecto recusandae repellat officia iusto, 
                        praesentium, dolorem magni eius ad, iure rerum modi enim? 
                        Quia iure ratione sint at adipisci.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni recusandae necessitatibus quibusdam facere, itaque aliquam commodi accusantium temporibus at nobis libero asperiores, 
                    vitae tenetur rem sed dolorum deleniti vero in.
                    </p>
                    <p>Check out some of my latest projects.</p>
                </div>
                <div>
                    <img src="" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About
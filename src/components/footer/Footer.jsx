import React from 'react';
import img1 from './Rectangle 4385.png';
import img2 from './Rectangle 758.png';
import img3 from './Rectangle 747.png';
import img4 from './Rectangle 745.png';
import img5 from './Rectangle 746.png';
import img6 from './Rectangle 744.png';
import img7 from './Rectangle 748.png';
import img8 from './Rectangle 759.png';

function Footer() {
    return (
        <div className='bg-gray-900 text-white'>

            {/* Meet With Our Team Section */}
            <section className='p-6 w-100 m-0 lg:m-auto lg:w-4/6'>
                <p className='text-yellow-400 text-sm tracking-widest mb-2 defult-font font-thin'>OUR PROJECT</p>
                <h1 className='text-5xl defult-font font-thin'>Meet With Our Team</h1>
                <div className='overflow-x-auto'>
                    <img className='max-w-none w-100 mt-10' src={img1} alt="" />
                </div>
                <div className='mt-8'>
                    {[
                        {
                            name: "Cody Fisher",
                            job: "CEO"
                        },
                        {
                            name: "Savannah Nguyen",
                            job: "Interior architect"
                        },
                        {
                            name: "Jerome Bell",
                            job: "Interior"
                        },
                        {
                            name: "Cameron Williamson",
                            job: "architect"
                        },
                        {
                            name: "Marvin McKinney",
                            job: "COnstruction head"
                        }
                    ].map((item, index) => (
                        <div className='mt-3' key={index}>
                            <p className='uppercase'>{item.name} -  {item.job}</p>
                            <div className='w-100 h-px bg-gray-600 mt-2'></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className='mt-20'>
                <div className="flex overflow-x-auto w-5/6 m-auto">
                    <img className='w-44' src={img2} alt="" />
                    <img className='w-44' src={img3} alt="" />
                    <img className='w-44' src={img4} alt="" />
                    <img className='w-44' src={img5} alt="" />
                    <img className='w-44' src={img6} alt="" />
                    <img className='w-44' src={img7} alt="" />
                    <img className='w-44' src={img8} alt="" />
                </div>
                <div className='flex mt-20 justify-center gap-6 xl:w-4/6 m-auto flex-wrap px-2'>
                    <div className='xl:w-64 lg:w-64 md:w-64 w-2/3 xl:p-4 '>
                        <h1 className='xl:text-5xl text-2xl cursor-pointer defult-font font-thin'>RMC</h1>
                        <p className='xl:mt-16 text-sm'>
                            Take a look at how we designed this housesimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </p>
                    </div>
                    <div className='w-px bg-gray-600 lg:block xl:block hidden'></div>
                    <div className='xl:w-64 lg:w-64 md:w-64 flex flex-col xl:gap-5 gap-2 items-center'>
                        <a className='text-orange-300 xl:text-lg text-sm' href='#'>THE STUDIO</a>
                        <a href='#'>PROJECTS</a>
                        <a href='#'>Architecture</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Contact</a>
                    </div>
                    <div className='w-px bg-gray-600 lg:block 2xl:block hidden'></div>
                    <div className='xl:w-64 lg:w-64 md:w-64'>
                        <h1 className='text-4xl cursor-pointer defult-font font-thin'>Visit</h1>
                        <p className='text-sm mt-3'>Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
                        <h1 className='text-4xl mt-10 cursor-pointer defult-font font-thin'>Call</h1>
                        <p className='text-sm mt-3'>017-6153-1774</p>
                    </div>
                </div>
                <div className='mt-10 h-px bg-gray-600'></div>
                <div className='text-center py-3'>©  Copyright 2024 Email: <span className='text-orange-300'>Codenest@gmail.com</span></div>
            </footer>
        </div>
    )
}

export default Footer

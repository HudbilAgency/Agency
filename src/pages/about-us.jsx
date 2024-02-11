import React, { useEffect, useRef, useState } from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import rectImage from '../assets/fox.png'
import arrow from '../assets/Vector (2).png'
import rectImage2 from '../assets/hands.png'
import rectImage3 from '../assets/fox1.png'
import rectImage4 from '../assets/fox2.png'
import whiteArrow from '../assets/white-arrow.png'
import Footer from '../components/footer/footer'
import { Link } from 'react-router-dom';


const Who = () => {

    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            <div className="whatMakesUs mt-10 px-6 sm:px-28 lg:px-48 xl:px-64 2xl:w-3/4 sm:px-0 sm:pl-40 text-[#DF2323] text-6xl sm:text-[6rem] font-black">
                <h1> What makes </h1>
                <h1> Us Foxoe! </h1>
                <p className='text-base mt-6 sm:text-lg  text-black font-normal'>Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. COLTFOX harnesses the power of data analytics to understand customer behaviours and preferences.</p>
            </div>
            <div className="right-align px-6 sm:px-0 sm:pl-28 lg:pl-48 xl:pl-64 pt-10 xl:pt-12 sm:ml-[25%]">
                <div className="img-rect w-full">
                    <img className='w-full' src={rectImage} alt="" />
                </div>
            </div>
            <div className="right-align px-6 sm:px-28 lg:px-48 xl:px-64 pt-10 sm:ml-[25%]">
                <div className="content sm:px-0 pt-8">
                    <h2 className='text-[#DF2323] text-4xl pb-2 pb-8 font-semibold '>We are trailblazers</h2>
                    <div className='h-[1px] mb-10 bg-[#DF2323]'></div>
                    <p className='text-base  sm:text-lg '>Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. <strong>COLT harnesses the power of data analytics to understand customer behaviors and preferences.</strong></p>
                </div>
                <div className="content  sm:px-0 pt-8">
                    <h2 className='text-[#DF2323] text-4xl pb-8 font-semibold '>We Expect BIG Results</h2>
                    <div className='h-[1px] mb-10 bg-[#DF2323]'></div>
                    <p className='text-base  sm:text-lg '>Our strength lies in our commitment to data-driven performance solutions designed to increase lead generation, customer acquisition, and audience engagement <strong>We expect BIG things for ourselves just as we expect transformative, revenue-generating growth for all our clients.</strong></p>
                </div>
                <div className="content  sm:px-0 pt-8">
                    <h2 className='text-[#DF2323] text-4xl pb-8 font-semibold '>Let’s Collabratre</h2>
                    <div className='h-[1px] mb-10 bg-[#DF2323]'></div>
                    <p className='text-base  sm:text-lg '>Marketing isn’t a one-off activity but a continuous process. We’re not a place where brands go to get a website or a PR campaign. <strong> We act as an extension to your organization, connecting the dots between ideas, strategy, and technology to deliver long-term, sustainable solutions.</strong></p>
                </div>
            </div>

            <div className="bg-[#D9D3D3] bg-[url('/noise-grey.png')] bg-blend-overlay px-6 sm:px-28 lg:px-48 xl:px-64 mt-5 py-5 sm:py-20">
                <div className="left justify-center  items-center flex-col sm:flex-row flex gap-20">
                    <div>
                        <div className="pill bg-white text-[#FCAB64] text-lg w-max px-8 rounded-full py-2 shadow-xl mb-6">Team</div>
                        <div className='text-4xl sm:text-5xl '>
                        <h2 className=' mb-10 font-semibold leading-tight'>Have you got what it <br className='hidden sm:visible'></br> takes to be a fox?</h2>
                        </div>
                        <a href="" className="flex  w-max rounded-full gap-14 p-3 px-5 border border-[#FCAB64]">
                        <Link to="/our-team"><div className='text-[#FCAB64] font-normal text-xl'>Check your teams</div></Link>
                            <svg className='m-auto' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 8H16.5M16.5 8L10.25 1.75M16.5 8L10.25 14.25" stroke="#FCAB64" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <img className='w-full h-full' src={rectImage2} alt="" />
                    </div>
                </div>

                <div className="left justify-center flex-col  mt-24 flex sm:flex-row-reverse gap-20">
                    <div className='flex flex-col'>
                        <div className="pill bg-white w-max px-7 rounded-full py-2 shadow-xl text-[#FCAB64]">Culture</div>
                        <div className='text-4xl sm:text-5xl'>
                        <h2 className='  mb-10 font-semibold leading-tight mt-6'>Have you got what it <br className='hidden sm:visible'></br> takes to be a fox?</h2>
                        </div>
                        <a href="" className="flex bg-[#FCAB64] bg-[url('/noise.png')] bg-blend-overlay w-max rounded-full gap-14 p-3 px-5 border border-[#FCAB64]">
                            <Link to="/faq"><div className='text-white font-normal text-xl'>Our FAQ's</div></Link>
                            <img className='h-4 m-auto' src={whiteArrow} alt="" />
                        </a>
                    </div>
                    <div>
                        <img className='mt-0 lg:mt-20 w-full  h-full' src={rectImage3} alt="" />
                    </div>
                </div>

                <div className="left justify-center ml-52 mt-[-54px] items-center flex ">
                    <div>
                        <img className='sm:mt-[50%] lg:mt-[10%] xl:mt-0 w-[90%] hidden sm:block h-full' src={rectImage4} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Who
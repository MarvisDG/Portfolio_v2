'use client'

import Aos from 'aos'
import { useEffect } from 'react'

type ServiceProps = {
    ServiceTitle: String;
}

// const ServiceTitleOverlay = {
//     text: 'What can i do ?',
// }
// const SkillTitleOverlay = {
//     text: 'How Good',
// }

function Services(props: ServiceProps) {
    useEffect(() => {
        Aos.init({ duration: 750 })
    }, [])

    const skill = {
        title: 'Skills',
        name1: 'Web Dev',
        name2: 'Ui/Ux',
        name3: 'Data Science',
        name4: 'Server-side',
        style: {
            backgroundColor: 'transparent',
            width: 'auto',
        },
    }
    // const skill_style = {
    //     text1: {
    //         color: '#fff',
    //         fontSize: '.72rem',
    //         width: '90%',
    //     },
    //     text2: {
    //         color: '#fff',
    //         fontSize: '.72rem',
    //         width: '55%',
    //     },
    //     text3: {
    //         color: '#fff',
    //         fontSize: '.72rem',
    //         width: '90%',
    //     },
    //     text4: {
    //         color: '#fff',
    //         fontSize: '.72rem',
    //         width: '75%',
    //     },
    // }

    return (
        <div id='service_section'>
            <div className="pb-5 vh-auto h-auto pt-0 flex flex-column items-center justify-start">
                {/* Services */}
                <div className=" p-0 m-0 flex-wrap text-wrap flex flex-column justify-center items-center">

                    <div className=' pt-25 text-start flex flex-column items-center justify-center' style={{ width: '80%' }}>
                        <div className=" fw-bolder flex items-center justify-center">
                            {/* <h2 data-aos="fade-up"
                                className='z-auto lg:pr-30 text_sm_res '
                                style={{
                                    fontSize: '3.7rem',
                                    fontFamily: 'impact',
                                    position: 'absolute',
                                    top: '85.6rem',
                                    left: '23rem',
                                    // letterSpacing: '.3rem',
                                    height: 'auto',
                                    width: '50%',
                                    margin: '0',
                                    textTransform: 'uppercase',
                                    // color: 'rgb(78 50 21 / 42%)',
                                    
                                }}>
                                {ServiceTitleOverlay.text}
                            </h2> */}
                            <h2 data-aos="fade-up"
                                className=""
                                style={{
                                    fontFamily: 'impact',
                                    fontSize: '2.5rem',
                                    width: 'auto',
                                    height: 'auto',
                                    color: '#e17100',
                                    textTransform: 'capitalize'
                                }}
                            >
                                {props.ServiceTitle}
                            </h2>
                        </div>
                        {/* Line Divider */}
                        <div
                            className="p-0 ms-0"
                            style={{
                                height: '4px',
                                width: '5.2rem',
                                zIndex: '99',
                                backgroundColor: '#e17100',
                            }}
                        ></div>
                        <p
                            className="text-center text-white pt-3 pb-4 flex self-center"
                            style={{ fontFamily: 'sans-serif'}}
                            data-aos="fade-up"
                        >
                            These are some service i can help you with...
                        </p>

                    </div>
                    <div className='p-0 m-0 flex items-center justify-center' style={{ width: 'auto' }}>
                        <div data-aos="fade-up"
                            className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ width: '80%' }}>
                            <div className="bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-code-slash text-3xl'></i>
                                <h5 className='text-white font-light text-2xl'>Web Design</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>
                            <div data-aos="fade-up"
                                className="bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-badge-3d text-3xl'></i>
                                <h5 className="text-white font-light text-2xl">3D Design</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>
                            <div data-aos="fade-up"
                                className="bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-camera-video text-3xl'></i>
                                <h5 className="text-white font-light text-2xl">Video Editing</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>
                            <div data-aos="fade-up"
                                className="bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-cart3 text-3xl'></i>
                                <h5 className="text-white font-light text-2xl">Marketing</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>

                            <div data-aos="fade-up"
                                className=" bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-filetype-css text-3xl'></i>
                                <h5 className="text-white font-light text-2xl">Desgin Trends</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>

                            <div data-aos="fade-up"
                                className="bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-phone text-3xl'></i>
                                <h5 className="text-white font-light text-2xl md:w-50 w-auto" >Mobile Development</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>

                            <div data-aos="fade-up"
                                className="bg-zinc-900 hover:bg-zinc-800 flex align-start flex-column text-left w-auto py-2 ps-3 pe-3 m-0 border-1 h-auto max-w-full rounded-sm">
                                <i className='font-bold text-amber-600 py-3 bi-robot text-3xl'></i>
                                <h5 className="text-white font-light md:w-50 w-auto text-2xl">AI/Machine Learning</h5>
                                <p className='text-zinc-700 w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, vero!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <-------------- Skills Section ------------------------> */}
            <div className='bg-black border-0'>

                <div
                    className="container flex flex-column justify-center bg-black"
                >
                    {/* pb-5 px-30 md:px-0 */}

                    <div id='skill_section' className="w-full flex mb-5 pt-30 flex-column items-center justify-center">
                        <div className='w-auto' style={{
                            zIndex: '3',
                        }}>
                            {/* <h2 className=''
                                data-aos="fade-up"
                                style={{
                                    fontSize: '3.5rem',
                                    fontFamily: 'impact',
                                    position: 'absolute',
                                    zIndex: '-1',
                                    // border: '2px solid red',
                                    top: '133.4rem',
                                    left: '32rem',
                                    letterSpacing: '.3rem',
                                    height: 'auto',
                                    width: 'auto',
                                    margin: '0',
                                    textTransform: 'uppercase',
                                    color: 'rgb(78 50 21 / 42%)',
                                }}>
                                {SkillTitleOverlay.text}
                            </h2> */}
                            <h5
                                className="m-0 p-0 text-uppercase"
                                style={{
                                    fontFamily: 'impact',
                                    fontSize: '2rem',
                                    color: '#e17100',
                                }}
                            >
                                {skill.title}
                            </h5>
                        </div>
                        {/* Divider */}
                        <div
                            className="p-0 ms-0 mt-2 me-2"
                            style={{
                                height: '4px',
                                width: '2.2rem',
                                backgroundColor: '#e17100',
                            }}
                        ></div>
                    </div>
                    {/* Progress_record Section */}
                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-20 flex-wrap h-auto w-auto items-center '>
                        <div className='mr-16 ml-0 my-4 w-auto sm:w-50'>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-amber-600 dark:text-white">Web Development</span>
                                <span className="text-sm font-medium text-amber-600 dark:text-white">90%</span>
                            </div>
                            <div className="w-full rounded-full h-2.5 bg-white">
                                <div className="bg-amber-600 h-2.5 rounded-full"
                                    style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mr-16 ml-0 my-4 w-auto'>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-amber-600 dark:text-white">Mobile Dev</span>
                                <span className="text-sm font-medium text-amber-600 dark:text-white">80%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                <div className="bg-amber-600 h-2.5 rounded-full"
                                    style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mr-16 ml-0 my-4 w-auto'>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-amber-600 dark:text-white">Video Editing</span>
                                <span className="text-sm font-medium text-amber-600 dark:text-white">65%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                <div className="bg-amber-600 h-2.5 rounded-full"
                                    style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='mr-16 ml-0 my-4 w-auto'>
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium text-amber-600 dark:text-white">AI / Machine Learning</span>
                                <span className="text-sm font-medium text-amber-600 dark:text-white">60%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
                                <div className="bg-amber-600 h-2.5 rounded-full"
                                    style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Services
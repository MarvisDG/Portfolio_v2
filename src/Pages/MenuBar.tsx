'use client'

import { useState } from "react";
import SplitText from "./../Components/SplitText";
import { Menu, X } from "lucide-react";
import LiquidGlass from "@/Components/LiquidGlass";
import Button from "../Components/Button"


const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

function MenuBar() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div
                className="z-40 w-full md:w-full relative h-auto flex flex-row justify-between md:px-0 ">
                <div className="text-dark h-auto pl-0 flex flex-row mb-0">
                    <SplitText
                        text="_marvel"
                        className="text-2xl text-center h-auto m-0 text-[#7b777c] font-bold"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <div className="bg-[#00ff00]" style={{ width: '0px', height: '5px', padding: '4px', marginLeft: '7px', borderRadius: '50%', marginBottom: '5px', alignSelf: 'flex-end' }}></div>
                </div>
                
                <nav className=" w-auto h-auto mr-0 flex items-end">
                    <ul className="hidden md:flex p-0 m-0 decoration-0 mr-0">
                        <li className="w-auto list-none font-sans text-normal flex flex-row">
                            <a className="flex items-center" href="#header_section" style={{textDecoration: 'none'}}>
                                <p className='flex items-center mb-0 me-3 text-sm hover:border-b-2 border-b-green-500 transition-all capitalize text-[#7b777c] font-medium'>
                                    Home
                                </p>
                            </a>

                            <a className="flex items-center" href="#about_section" style={{textDecoration: 'none'}}>
                                <p className='flex items-center mb-0 me-3 text-sm hover:border-b-2 border-b-green-500 transition-all capitalize text-[#7b777c] font-medium'>
                                    About Me
                                </p>
                            </a>

                            <a className="flex items-center" href="#service_section" style={{textDecoration: 'none'}}>
                                <p className='flex items-center mb-0 me-3 text-sm hover:border-b-2 border-b-green-500 transition-all capitalize text-[#7b777c] font-medium'>
                                    Services
                                </p>
                            </a>

                            <a className="flex items-center" href="#skill_section" style={{textDecoration: 'none'}}>
                                <p className='flex items-center mb-0 me-3 text-sm hover:border-b-2 border-b-green-500 transition-all capitalize text-[#7b777c] font-medium'>
                                    Skills
                                </p>
                            </a>

                            <a className="flex items-center" href="#resume_section" style={{textDecoration: 'none'}}>
                                <p className='flex items-center mb-0 me-3 text-sm hover:border-b-2 border-b-green-500 transition-all capitalize text-[#7b777c] font-medium'>
                                    Resume
                                </p>
                            </a>

                            <a className="flex items-center" href="#contact_section" style={{textDecoration: 'none'}}>
                                <p className='flex items-center mb-0 me-32 text-sm hover:border-b-2 border-b-green-500 transition-all capitalize text-[#7b777c] font-medium'>
                                    Contact
                                </p>
                            </a>
                        </li>

                        <Button className='self-centers justify-self-center border-1 border-white/10 flex justify-center align-middle text-[#7b777c] font-extrabold rounded-lg ' text="Hire Me">

                        </Button>
                    </ul>

                    <LiquidGlass className="absolute right-0 top-0">
                        <div className="flex md:hidden space-y-5 md:relative flex-col items-end h-auto w-auto z-100 transition-all pb-0 p-2">
                            {toggle ? 
                                <X size={19} className="mb-2 cursor-pointer text-[#00ff00] transition-all" onClick={() => setToggle(false)} /> :
                                <Menu size={19} className="mb-2 cursor-pointer text-[#00ff00] transition-all" onClick={() => setToggle(true)} />
                            }

                            {toggle && (
                                
                                <div className="px-22 py-7">
                                    <li className="w-auto list-none font-sans text-normal flex flex-col text-center">
                                        <a href="#header_section" style={{textDecoration: 'none'}}>
                                            <p className='text-[#00ff00] my-2 font-extralight'>
                                                Home
                                            </p>
                                        </a>
                                        
                                        <a href="#about_section" style={{textDecoration: 'none'}}>
                                            <p className='text-[#00ff00] my-2 font-extralight'>
                                                AboutMe
                                            </p>
                                        </a>
                                        
                                        <a href="#service_section" style={{textDecoration: 'none'}}>
                                            <p className='text-[#00ff00] my-2 font-extralight'>
                                                Services
                                            </p>
                                        </a>
                                        
                                        <a href="#skill_section" style={{textDecoration: 'none'}}>
                                            <p className='text-[#00ff00] my-2 font-extralight'>
                                                Skills
                                            </p>
                                        </a>
                                        
                                        <a href="#resume_section" style={{textDecoration: 'none'}}>
                                            <p className='text-[#00ff00] my-2 font-extralight'>
                                                Resume
                                            </p>
                                        </a>
                                        
                                        <a href="#contact_section" style={{textDecoration: 'none'}}>
                                            <p className='text-[#00ff00] my-2 font-extralight'>
                                                Contact
                                            </p>
                                        </a>
                                    </li>
                                </div>
                            )}
                        </div>
                    </LiquidGlass>
                </nav>


                {/* <img src='..\src\assets\ko1.png' style={{width: "70%", zIndex: -9, position:"absolute", top:-200, right:-100}}/> */}
            </div>
        </>
    )
}
export default MenuBar
'use client'

import Button from "../Components/Button"
import Aos from 'aos'
import { useEffect } from 'react'
import Image from 'next/image'


type AboutMeProps = {
	AboutMe_title: string
	AboutMe_text1: string
	AboutMe_text2: string
}

const Op1 = {
	FirstName: 'Who am i?',
	// LastName: 'Marvelous',
	style1: {
		// color: '#21252959',
		color: 'rgba(126, 131, 135, 0.35)',
		position: 'absolute',
		fontSize: '4rem',
		top: '30px',
		height: '5.5rem',
		zIndex: '-7',
		// innerWidth: '20px',
		fontFamily: 'impact',
	},
}


export default function AboutMe(props: AboutMeProps) {
	useEffect(() => {
		Aos.init({ duration: 750 })
	}, [])
	return (
		<>

			<div
				className="w-auto border-b-2 border-b-gray-800 bg-transparent"
				style={{
					fontFamily: '"Open Sans", sans-serif',
					// backgroundColor: '#000',
				}}
			>
				<div className="w-auto h-auto pt-5 pl-20 lg:pl-10 m-0 align-items-center justify-content-center flex flex-col lg:flex-col xl:flex-row">
{/* #00ff00 */}
					{/* Left section */}
					<div
						className=" m-0 pl-0 w-fit xl:w-72 lg:w-100 md:w-350 h-150">
						<Image
							src="/assets/images/dp2.png"
							alt="Profile picture"
							width={500}
							height={500}
							className="m-0 p-0 w-full h-full"
							style={{ transform: 'scaleX(-1)' }}
						/>
					</div>

					{/* Right Section */}
					<div data-aos="fade-up"
						className=" h-auto text-uppercase px-15 xl:px-40 pt-50 lg:pt-10 pb-2 w-100 xl:w-100 flex justify-content-start items-start flex-col text-wrap"
						style={{
							zIndex: '2',
						}}
					>
						<div
							className="  m-0 p-0 fw-bolder text-white text-start float-start">
							<h2 style={{
								fontSize: '4rem',
								fontFamily: 'impact',
								position: 'relative',
								top: '-25%',
								zIndex: '-1',
								left: '-5%',
								height: '0rem',
								width: 'auto',
								margin: '0',
								textTransform: 'capitalize',
								color: 'rgba(98, 65, 31, 0.52)',

							}}>
								{Op1.FirstName}
							</h2>
							<h2
								className="m-0 p-0"
								style={{
									fontFamily: 'impact',
									fontSize: '2.5rem',
									width: 'auto',
									height: 'auto',
									color: '#e17100',
									textTransform: 'capitalize'
								}}
							>
								{props.AboutMe_title}
							</h2>
						</div>

						{/* Short Line */}
						<div className="container-xxl w-50 p-0 h-auto d-flex flex-row mb-2 mt-3 ms-0 "
							style={{
								// border: '9px solid violet'
							}}>
							<div
								className="m-0 p-0 "
								style={{
									height: '4px',
									width: '3.2rem',
									backgroundColor: '#e17100',
									// border: '4px solid red'
								}}
							></div>
						</div>

						{/* First Write-up */}
						<h6
							className="lh-3 text-capitalize pb-4 h-auto fw-lighter d-flex align-self-start"
							style={{
								fontFamily: 'sans-serif',
								fontSize: '.8rem',
								width: 'auto',
								color: '#fff',
								// border: '4px solid green'
							}}
							data-aos="fade-up"
						>
							{props.AboutMe_text1}
						</h6>

						{/* Second write-up */}
						<h6
							className="text-capitalize fw-lighter d-flex align-self-start "
							style={{
								fontFamily: 'sans-serif',
								fontSize: '.8rem',
								width: 'auto',
								color: '#fff',
								// border: '4px solid green'
							}}
							data-aos="fade-up"
						>
							{props.AboutMe_text2}
						</h6>

						{/*  */}

						<div className="h-auto p-0 flex-row grid grid-cols-2 md:grid-cols-2 ">
							{/* Name */}
							<div data-aos="fade"

								className=" p-0 m-0 text-left pt-3 flex flex-column align-center "
								style={{ fontSize: '.9rem', width: '100%' }}
							>
								<h4
									className="lh-0 m-0 p-0 fw-bold"
									style={{ fontSize: '.7rem', width: 'auto', color: '#e17100' }}
								>
									Name:
								</h4>
								<p
									className="text-zinc-400 text-wrap"
									style={{ fontSize: '.7rem', width: '80%' }}
								>
									Umoh Marvelous Sunday
								</p>
							</div>
							{/* Email */}
							<div data-aos="fade"

								className=" p-0 m-0 text-left pt-3 flex flex-column align-center "
								style={{ fontSize: '.9rem', width: '0%' }}
							>
								<h4
									className="lh-0 m-0 p-0 fw-bold"
									style={{ fontSize: '.7rem', width: 'auto', color: '#e17100' }}
								>
									Email:
								</h4>
								<p
									className="text-zinc-400 text-wrap"
									style={{ fontSize: '.7rem', width: '40%', textTransform: 'lowercase' }}
								>
									umohm450@gmail.com
								</p>
							</div>
							{/* Address */}
							<div data-aos="fade"

								className=" p-0 m-0 text-left pt-3 flex flex-column align-center "
								style={{ fontSize: '.9rem', width: '90%' }}
							>
								<h4
									className="lh-0 m-0 p-0 fw-bold"
									style={{ fontSize: '.7rem', width: 'auto', color: '#e17100' }}
								>
									ADDRESS
								</h4>
								<p
									className="text-zinc-400 text-wrap "
									style={{ fontSize: '.7rem', width: '93%' }}
								>
									Okpaka Street, Udu L.G.A, Warri, Delta State, Nigeria
								</p>
							</div>
							{/* Phone No. */}
							<div data-aos="fade"

								className="pt-3 text-left m-0 h-auto flex flex-column "
								style={{ width: '100%' }}
							>
								<h4
									className="lh-0 m-0 p-0 fw-bold"
									style={{ fontSize: '.7rem', width: '80%', color: '#e17100' }}
								>
									Phone No.
								</h4>
								<p
									className="text-zinc-400"
									style={{ fontSize: '.7rem', }}
								>
									+234 9065424346
								</p>
							</div>
						</div>
						{/*  */}
						<div className="container-xxl m-0 p-0 d-flex align-items-center" style={{
						}}>

							<a style={{ listStyle: 'none', textDecoration: 'none' }} href="Fname" id="First">
								<Button text="Download CV" />
							</a>
						</div>
					</div>
				</div>
			</div >

		</>
	)
}

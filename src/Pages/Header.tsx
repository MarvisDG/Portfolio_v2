'use client'

import Tops from './Tops';
import MenuBar from './MenuBar'
import CountUp from './../Components/CountUp'
// import GithubContributions from './../Components/GithubContributions';
import Image from 'next/image'
import LiquidGlass from '@/Components/LiquidGlass';
import Profile from '@/Components/Profile';


function Header() {


	return (
		<>
			<header className="flex w-full h-auto min-h-auto flex-col justify-centner items-center bg-transparent"
			>


				<Image        
					src="/assets/images/dp1.png"
					alt="Profile picture"
					width={220}
					height={220}
					className="m-0 p-0 w-fit h-fit hidden"
					style={{
						transform: 'scaleX(-1) scale(3.3)', // flip and zoom
						zIndex: -9,
						position: "absolute",
						top: 200,
						left: 350,
						borderRadius: '50%',
						objectFit: 'cover',
					}}
				/>
				

				{/* <LiquidGlass className="w-full h-full "> */}
				<div className=' w-full px-20 py-12 bg-white/10 rounded-3xl border-1 border-white/10 '>
					<MenuBar />
					
					<div className="h-fit min-h-fit flex w-full md:pwy-28 py-20">
						<Tops />
					</div>
				</div>

				<Profile	/>

				{/* </LiquidGlass> */}




				{/* Bottom address side */}
				{/* bg-zinc-900 rounded-3xl border-1 border-white/10  */}
				<LiquidGlass className='my-12 '>
					<div className='w-full py-5 px-9 grid grid-cols-2 md:grid-cols-4 text-white'>

					<span className='mr-72 d-flex flex-row align-items-center' >
						<CountUp
							from={0}
							to={12}
							separator="," 
							direction="up"
							duration={1}
							className="count-up-text pe-2 text-[45px] font-monospace" 
						/>
						<h6 className='w-20' style={{ fontSize: '12px' }}>years of experiences</h6>
					</span>
					<span className='mr-72 d-flex flex-row align-items-center' >
						<CountUp
							from={0}
							to={26}
							separator="," 
							direction="up"
							duration={1}
							className="count-up-text pe-2 text-[45px] font-monospace" 
						/>
						<h6 className='w-10' style={{ fontSize: '12px' }}>Projects Completed</h6>
					</span>
					<span className='mr-72 d-flex flex-row align-items-center' >
						<CountUp
							from={0}
							to={8}
							separator="," 
							direction="up"
							duration={1}
							className="count-up-text pe-2 text-[45px] font-monospace" 
						/>
						<h6 className='w-10' style={{ fontSize: '12px' }}>Technologies Mastered</h6>
					</span>
					<span className='mr-72 flex flex-row align-items-center' >
						<CountUp
							from={0}
							to={500}
							separator="," 
							direction="up"
							duration={1}
							className="count-up-text pe-2 text-[45px] font-monospace" 
						/>
						<h6 className='w-10' style={{ fontSize: '12px' }}>Code Commits</h6>
					</span>
					{/* <span className='mr-72 flex flex-row align-items-center' >
						<GithubContributions />
						<h6 className='w-10' style={{ fontSize: '12px' }}>GitHub Contributions</h6>
					</span> */}
					</div>


				</LiquidGlass>
			</header>
		</>
	)
}

export default Header

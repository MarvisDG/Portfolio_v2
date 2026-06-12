import AboutMe from './AboutMe'

function SectionOne() {


	return (
		<>
			{/* AboutMe Prop:: check About component */}
			{/* <div className='flex flex-col @lg:flex-row w-5/6 border-2 border-red-500'> */}
				<AboutMe
					AboutMe_title="AboutMe"
					AboutMe_text1="I am Umoh Marvelous, a dedicated computer scientist with 
					a passion for technology and innovation. Over the course of four 
					years of intensive study, I delved into computer science, 
					acquiring a comprehensive understanding of programming languages, 
					alogrithms and system architectures."
					AboutMe_text2="My journey has been marked by a commitment to excellence,
										evident in academic achievements and hands-on projects. With a 
										keen intrest in staying abreast of the latest technological trends 
										to make significant contibutions and shape the future of computing."
				/>
			{/* </div> */}
		</>
	)
}
export default SectionOne

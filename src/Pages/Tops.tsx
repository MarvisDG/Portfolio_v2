import Button from "../Components/Button"


export default function Tops() {
	const top = {
		style1: {
			fontSize: '1rem',
			fontFamily: 'monospace',
			color: '#00ff00',
			fontWeight: 'bold'
		},
		style2: {
			fontFamily: 'fantasy',
			fontWeight: " bold",
			color: '#7b777c',
			margin: '0'
		},
		style3: {
			// color: '#00ff0075',
			color: '#fff',
			fontWeight: '700',
			fontFamily: 'arial',
			margin: '0'
		},
		style4: {
			color: '#7b777c',
			fontFamily: 'arial',
			paddingTop: '12px'
		}
	}
	const intro = {
		name: "UMOH MARVELOUS ",
		text1: "Software Developer",
		text2: "Hello I'm",
		text3: "I specialize in crafting digital experiences and have a deep proficiency in a wide range of languages and technologies. specialize in crafting digital experiences and have a deep proficiency in a wide range of languages and technologies.",
	}
	return (
		<>
			<div className="w-full" >
				<div className="flex flex-col-reverse md:flex-row md:justify-between md:flex md:py-0 md:pb-5 ">

					<div
						className="relative me-0 ms-0 md:mt-5 mt-0 flex md:flex-col m-0 items-center justify-around md:justify-center">
						<a href="https://www.instagram.com/marvelstainlex">
							<p className="my-2 w-auto h-auto text-zinc-400 p-1 hover:text-white" title="Instagram " no-rel="_blank">
								<i className="bi bi-instagram "></i>
							</p>
						</a>
						

						<a href="#">
							<p className="my-2 w-auto h-auto text-zinc-400 p-1 hover:text-white" title="WhatsApp">
								<i className="bi bi-whatsapp"></i>
							</p>
						</a>

						<a href="mailto:">
							<p className="my-2 w-auto h-auto text-zinc-400 p-1 hover:text-white"title="Mail">
								<i className="hover_show bi bi-envelope-paper"></i>
							</p>
						</a>

						<a href="tel:+">
							<p className="my-2 w-auto h-auto text-zinc-400 p-1 hover:text-white">
								<i className="bi-telephone-fill"></i>
							</p>
						</a>
					</div>


					{/* Introduction About Me */}
					<div
						className=" pt-32 md:pt-0 pb-0 md:pb-12 md:items-center h-auto pe-0 mt-0 m-0 px-80 w-full md:w-full flex flex-col flex-wrap text-wrap">
						<div className="w-full md:w-2xl m-0 pe-0 h-auto">

							<div className="flex-wrap text-wrap flex-1">
								<p
									className="py-3 w-auto mb-0 text-bolder uppercase p-0"
									style={top.style1}>
									{intro.text1}
								</p>
							
								<p className="pt-3 text-xs" style={top.style2}>
									{intro.text2}
								</p>

								<div className="w-auto">
									<p className="font-extrabold md:text-7xl text-4xl" style={top.style3}>
										{intro.name}
									</p>
								</div>
							
								<div className="" style={top.style4}>
									<p
										className="font-lighter text-justify m-0 md:text-xl text-sm">
										{intro.text3}
									</p>
								</div>
							</div>


							<div className="flex flex-col items-center justify-between mt-12">
								<div className="absolute top-48 right-22 flex flex-col gap-6 justify-between md:top-68 md:right-84 md:flex-row">
									<a style={{fontSize:'44px', listStyle:'none', textDecoration:'none'}} href="#">
										<i className="bi-github flex self-center ml-5 fs-5 text-[#00ff00]" ></i>
									</a>
									<a style={{fontSize:'44px', listStyle:'none', textDecoration:'none'}} href="#">
										<i className="bi-linkedin flex self-center ml-5 fs-5 text-[#00ff00]" ></i>
									</a>
								</div>
							</div>
						</div>
					</div> 	
				</div>
				
				<div className="mt-12 text-white flex flex-row self-center items-center justify-center">
					<Button text="Download CV" className="">
							<i className="ms-2 bi-download text-sm"></i>
					</Button>
				</div>
			</div>
		</>
	)
}


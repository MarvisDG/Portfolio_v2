
export default function Contact() {
	const contactProp = {
		title: 'Contact Me',
		mainColor: 'blue',
		highlight_color: '#dc3545',
		details_text1: '+234 9065424346',
		details_text2: 'Okpaka st',
		details_text3: 'DeltaState Warri',
	}

	return (
		<>
			<div
			id="contact_section"
				className="px-3 h-auto pb-2 md:pb-4 overflow-x-hidden flex align-middle justify-center flex-wrap flex-column "
				style={{
					width:'80%'
				}}
			>
				<h2
					className="m-0 w-auto p-0 fw-bolder flex flex-column align-items-start justify-content-center"
					id="contact"
					style={{
						color: '#e17100',
					}}
				>
					{contactProp.title}
					<div className="w-50 p-0 h-auto flex m-0 mt-2 mb-4 ps-1 d-flex flex-row align-items-center justify-content-start">
						<div
							className="m-0 p-0 "
							style={{
								height: '4px',
								width: '3.2rem',
								backgroundColor: '#e17100',
							}}
						></div>
						<div
							className="w-50 "
							style={{
								height: '.5px',
								backgroundColor: 'white',
							}}
						></div>
					</div>
				</h2>
				<div
					className="w-auto text-white m-0 p-0 d-flex justify-between items-start flex-column"
				>
					<div className=" flex flex-row gap-3 ps-0">
						<i className="bi bi-envelope-fill fs-5"></i>
						<p>{contactProp.details_text1}</p>
					</div>
					<div className=" flex flex-row gap-3 ps-0">
						<i className="bi bi-telephone-fill fs-5"></i>
						<p>{contactProp.details_text2}</p>
					</div>
					<div className=" flex flex-row gap-3 ps-0">
						<i className="bi bi-map-fill fs-5"></i>
						<p>{contactProp.details_text3}</p>
					</div>
				</div>
			</div>
		</>
	)
}



import { useState } from 'react'

export default function Counter() {
	const contact = {
		title: 'Contact Me',
		mainColor: 'blue',
		highlight_color: '#dc3545',
		details_text1: '+234 9065424346',
		details_text2: 'Okpaka st',
		details_text3: 'DeltaState Warri',
	}

	return (
		<>
			<div className="flexxx w-50 h-auto p-0 pb-4 pt-5 mt-5 overflow-x-hidden container-xxl d-flex align-items-center justify-content-center gap-0 flex-wrap flex-column ">
				<h2
					className="title_flex m-0 container-xxl w-auto p-0 fw-bolder d-flex flex-column align-items-start justify-content-center"
					id="contact"
					style={{
						color: '#dc3545',
					}}
				>
					{contact.title}
					<div className=" container-xxl w-50 p-0 h-auto d-flex m-0 mt-2 mb-4 ps-1 d-flex flex-row align-items-center justify-content-start">
						<div
							className="m-0 p-0 "
							style={{
								height: '4px',
								width: '3.2rem',
								backgroundColor: '#dc3545',
							}}
						></div>
						<div
							className="w-50 "
							style={{
								height: '.5px',
								backgroundColor: 'lightgray',
							}}
						></div>
					</div>
				</h2>
				<div className="container-xxl w-auto m-0 p-0 d-flex justify-content-between align-items-start flex-column">
					<div className=" d-flex flex-row gap-3 ps-0">
						<i className="bi bi-envelope-fill fs-5"></i>
						<p>{contact.details_text1}</p>
					</div>
					<div className=" d-flex flex-row gap-3 ps-0">
						<i className="bi bi-telephone-fill fs-5"></i>
						<p>{contact.details_text2}</p>
					</div>
					<div className=" d-flex flex-row gap-3 ps-0">
						<i className="bi bi-map-fill fs-5"></i>
						<p>{contact.details_text3}</p>
					</div>
				</div>
			</div>
		</>
	)
}

// Forms
export function Form() {
	const [Fname, setFName] = useState('')
	const [Lname, setLName] = useState('')

	const formSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setFName('')
		setLName('')
	}

	// Submitting Form
	// const Frm = useRef()

	// const formInputRef = useRef()

	// const focusInput = () => {
	// 	formInputRef.current.focus()
	// }

	return (
		<>
			<form
				className="container-xxl w-auto m-0 d-flex justify-content-center align-items-center flex-column h-auto p-0"
				// ref={Frm}
				onSubmit={formSubmit}
			>
				<fieldset className="fieldset p-0 m-0 " style={{ width: '60%' }}>
					<div className="d-flex justify-content-center flex-column mb-4">
						<label
						// onClick={focusInput}
						>
							{/* Click */}
						</label>
						<input
							// ref={formInputRef}
							type="text"
							className=" bg-dark-subtle border-0 rounded-1 p-3"
							name="first"
							id="first"
							placeholder="First Name"
							value={Fname}
							onChange={(e) => setFName(e.target.value)}
						/>
					</div>
					<div className="d-flex justify-content-center flex-column">
						<label htmlFor="last"></label>
						<input
							type="text"
							className=" bg-dark-subtle border-0 rounded-1 p-3"
							name="last"
							id="last"
							placeholder="Last Name"
							required
							value={Lname}
							onChange={(e) => setLName(e.target.value)}
						/>
					</div>
					<div className="mt-3 mb-3 ">
						<textarea
							name="message"
							className="bg-dark-subtle border-0 rounded-1 p-3 w-100 h-auto"
							placeholder="Leave a message"
							id="message"
						></textarea>
					</div>

					<button
						type="submit"
						disabled={!Fname && !Lname}
						className="w-100 border-0 rounded-1 bg-danger text-white h-auto fs-6 m-0 p-2"
					>
						SEND
					</button>
				</fieldset>
			</form>
		</>
	)
}

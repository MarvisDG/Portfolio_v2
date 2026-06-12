'use client'

import { useState } from 'react'

// Forms
function SubcribeEmail() {
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
				className=" w-sm md:w-2xl p-0 m-0 flex justify-center align-middle flex-column h-auto"
				// ref={Frm}
				onSubmit={formSubmit}
			>
				<fieldset className="fieldset flex flex-column justify-center px-4 m-0" style={{}}>
					<div className="flex justify-center flex-column mb-4">
						<label
						// onClick={focusInput}
						>
							{/* Click */}
						</label>
						<input
							// ref={formInputRef}
							type="text"
							className="focus:outline-offset-1 focus:outline-amber-600 active:bg-amber-600 bg-light border-0 rounded-1 p-3"
							name="first"
							id="first"
							placeholder="First Name"
							value={Fname}
							onChange={(e) => setFName(e.target.value)}
						/>
					</div>
					<div className="flex justify-center flex-column">
						<label htmlFor="last"></label>
						<input
							type="text"
							className=" focus:outline-offset-1 focus:outline-amber-600 active:bg-amber-600 bg-white border-0 rounded-1 p-3"
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
							className=" focus:outline-offset-1 focus:outline-amber-600 active:bg-amber-600 bg-white border-0 rounded-1 p-3 w-100 h-auto"
							placeholder="Leave a message"
							id="message"
						></textarea>
					</div>

					<button
						type="submit"
						disabled={!Fname && !Lname}
						className="hover:bg-zinc-500 w-100 self-center justify-content-center flex border-0 rounded-1 bg-amber-600 text-white h-auto fs-6 m-0 p-2"
					>
						SEND
					</button>
				</fieldset>
			</form>
		</>
	)
}

export default SubcribeEmail
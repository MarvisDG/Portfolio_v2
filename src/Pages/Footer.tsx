function Footer() {
	return (
		<>
			<div
				className="py-7 pt-12 mw-100 text-white flex justify-center flex-column items-center"
				data-bs-theme="dark"
			>
				<div
					className=" container me-4 d-flex flex-row m-0 "
					style={{ width: 'auto ' }}
				>
					<a
						href="https://www.whatsapp.com/dl/"
						className="bi bi-whatsapp mx-2 mb-2 w-auto h-auto text-white/50 hover:text-[#00ff00] p-1 text-md"
					>
						<i></i>
					</a>
					<a
						href="https://www.instagram.com/marvelstainlex"
						className="bi bi-instagram mx-2 mb-2 w-auto h-auto text-white/50 hover:text-[#00ff00] p-1 text-md"
					></a>
					<a
						href="#"
						className="bi bi-facebook mx-2 mb-2 w-auto h-auto text-white/50 hover:text-[#00ff00] p-1 text-md"
					>
						<i></i>
					</a>
					<a
						href="https://www.snapchat.com/add/marvis.usun?share_id=ugx+A27hSbyk8OBfdqXWVA&locale=en_NG"
						className="bi bi-snapchat mx-2 mb-2 w-auto h-auto text-white/50 hover:text-[#00ff00] p-1 text-md"
					>
						<i></i>
					</a>
				</div>
				<h6
					className="text-white-50 mb-0 fw-light d-flex align-iems-center justify-content-center"
					style={{ fontFamily: 'sans-serif', fontSize: '.82rem' }}
				>
					<span className="fs-6 pe-1">©</span> Copyright 2025 UmohMarvelous |
					All rights reserved
				</h6>
			</div>
		</>
	)
}

export default Footer

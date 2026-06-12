import SubcribeEmail from '@/Pages/SubcribeEmail'

import Contact from "./Contact"
import LiquidGlass from '@/Components/LiquidGlass'

function SectionThree() {
	return (
		
		<LiquidGlass className="bg-transparent rounded-xl">
				<div className="flex flex-col lg:flex-row w-5/6 h-auto justify-between py-5 m-0 px-5"
					style={{
						alignItems: 'center'
					}}
				>
					<Contact />

					<SubcribeEmail />
					</div>
		</LiquidGlass>
		
	)
}

export default SectionThree

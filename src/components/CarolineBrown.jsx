import { Container } from './Container'
import carolineBrownImage from '../images/caroline-brown-all-occasions-celebrant.jpg';

import Image from 'next/image'

export function CarolineBrown(){
	return(

		<section 
			className="bg-white"
			id="caroline-brown"
			aria-label="Caroline Brown, Teesside based Celebrant of all occasions, including Funerals, Weddings, Renewal of Vows and Naming Ceremonies."
		>

			<Container>


				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<div className="lg:pr-4">
								<div className="relative overflow-hidden rounded-full bg-aoc-navy p-1 shadow-2xl sm:p-2 lg:max-w-lg lg:p-3 ">
									<Image
										src={carolineBrownImage}
										alt="Caroline Brown, All Occasions Celebrant including Funerals, Weddings, Renewal of Vows and Naming Ceremonies"
										sizes="(min-width: 1024px) 32rem, 20rem"
										className="aspect-square rounded-full bg-dmDark object-cover"
									/>
								</div>
							</div>
							<div>
								<div className="text-lg leading-7 text-aoc-navy lg:max-w-lg">
									{/* <p className="text-base font-light bg-aoc-pink px-2">Head Celebrant</p> */}
									<div className="w-full h-2 bg-aoc-pink"></div>
									<h1 className="mt-2 text-3xl font-light tracking-tight text-aoc-navy sm:text-4xl">
										Caroline Brown
									</h1>
									<div className="max-w-xl font-light">
										<p className="mt-6">
											Meet Caroline, the heart and soul behind All Occasions Celebrant. Caroline is a passionate, fully trained celebrant who approaches every occasion with respect, warmth and creativity. With a deep commitment to making your special moments truly extraordinary, she's the driving force behind crafting unique and meaningful ceremonies. With a wealth of experience in presentation, she brings an ability to be flexible in the command of a space and encouraging the tone and atmosphere of all occasions.
										</p>
										<p className="mt-8">
											Naturally positive and personable, people and their stories are a true passion. Caroline's ability to infuse personal touches and imagination into each ceremony ensures that your event is a true reflection of you and what you’d like from your occasion.  She's not just an officiant; she's your trusted guide to creating cherished memories.
										</p>
									</div>
								</div>
				

							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
		
		
	)
}
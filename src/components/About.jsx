
import { Container } from '@/components/Container'

export function About(){
	return(

		<section className="bg-aoc-pink">

			<Container id="about">


				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto lg:mx-0">
						
								<h2 className="text-3xl font-light tracking-tight text-aoc-navy-dark sm:text-4xl">Celebrating Life's Moments: Our Brand Essence.</h2>

								<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg font-light leading-8 text-aoc-navy-dark lg:max-w-none lg:grid-cols-2">
								<div>
									<p>
										At All Occasions Celebrant, we proudly stand as independent celebrants, ready to orchestrate memorable moments for all occasions. Our commitment goes beyond mere officiating; we bring a positive and personable presence to every event, ensuring that your journey through life's milestones is not just special but deeply meaningful.
									</p>
									<p className="mt-8">
										We believe in crafting ceremonies that break free from the mold of 'how it should be' and embrace 'how it could be.' Our imaginative and creative approach allows us to design bespoke ceremonies that are 'just right' for you and your occasion. 
									</p>
								</div>
								<div>
									<p>
										Each occasion becomes a canvas, where your unique story takes center stage. Whether it's a wedding, vow renewal, naming ceremony, or a farewell tribute, we sculpt these moments into works of art that resonate with your emotions and dreams. 
									</p>
									<p className="mt-8">
										Every ceremony we create is a testament to the exceptional individuals and love stories it celebrates. With us, you can trust that your special moments will be transformed into unforgettable, one-of-a-kind experiences.
									</p>
								</div>
							</div>

						</div>
							
					</div>
				</div>
			</Container>
		</section>
		
		
	)
}

import { Container } from './Container'

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
										Proudly standing as an independent celebrant, ready to orchestrate memorable moments for all occasions. Commitment goes beyond officiating; bringing a positive and personable presence to every event, ensuring that your journey through life's milestones is not just special but deeply meaningful.
									</p>
									<p className="mt-8">
										Believing in crafting ceremonies that break free from the mould of 'how it should be' and embrace 'how it could be.' With an imaginative and creative approach allowing for the design of bespoke ceremonies that are truly personal and 'just right' for you and your occasion.
									</p>
								</div>
								<div>
									<p>
										Each occasion becomes a canvas, where your unique story takes centre stage. Whether it's a wedding, vow renewal, naming ceremony or a farewell tribute, these moments will be sculpted into works of art that resonate the significance of the occasion and the people who are at the centre of your story.
									</p>
									<p className="mt-8">
										Every ceremony created is a testament to the exceptional individuals and love stories it celebrates. You can trust that your special moments will be cared for, with respect and love, and transformed into beautiful, one-of-a-kind occasions.
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
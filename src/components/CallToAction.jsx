
import { Container } from './Container'
import { Button } from './Button'

export function CallToAction(){
	return(

		<section 
			id="call-to-action"
			className="bg-aoc-navy-dark"
			aria-label="Ready to get in touch with All Occasions Celebrant? How to start the process."
		>

			<Container>


				<div className="py-24 sm:py-32">
					<div className="relative isolate overflow-hidden mx-auto max-w-7xl px-6 lg:px-8 text-center">
						<h2 className="mx-auto max-w-2xl text-3xl font-light tracking-tight text-aoc-pink sm:text-4xl">
							Ready to turn your special&nbsp;moment into an unforgettable occasion?
          	</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-aoc-pink font-light">
							Let's start crafting your unique ceremony together.
						</p>
						<div className="mt-10 py-2 flex items-center justify-center gap-x-6">
							<Button href="tel:+447843498738" color="pink" variant='outline'>Phone</Button>
							<Button href="/hello" color="pink">Say hello</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
		
		
	)
}
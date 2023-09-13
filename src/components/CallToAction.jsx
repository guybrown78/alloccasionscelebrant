
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction(){
	return(

		<section className="bg-aoc-navy-dark">

			<Container id="call-to-action">


				<div className="py-24 sm:py-32">
					<div className="relative isolate overflow-hidden mx-auto max-w-7xl px-6 lg:px-8 text-center">
						<h2 className="mx-auto max-w-2xl text-3xl font-light tracking-tight text-aoc-pink sm:text-4xl">
							Ready to turn your special&nbsp;moments into unforgettable celebrations?
          	</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-aoc-pink font-light">
							Let's start crafting your unique ceremony together.
						</p>
						<div className="mt-10 py-2 flex items-center justify-center gap-x-6">
							<Button href="tel:+447459 953658" color="pink" variant='outline'>Phone</Button>
							<Button href="/hello" color="pink">Say hello</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
		
		
	)
}

import { Container } from '@/components/Container'

export function About(){
	return(

		<section className="bg-aoc-pink">

			<Container id="about">


				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<h2 className="text-3xl font-light tracking-tight text-aoc-navy-dark sm:text-4xl">Full Celebrancy Services Tailor-Made for All Occasions.</h2>
							<p className="mt-6 text-lg font-extralight leading-8 text-aoc-navy-dark">
								At All Occasions Celebrant we listen your needs, communicate ideas and work closely with you, creating beautiful bespoke cereomies. We specialise in infusing your unique story and emotions into unforgettable moments.
							</p>
						</div>
						<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
							{/* <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
								{features.map((feature) => (
									<div key={feature.id} id={feature.id} className="flex flex-col">
										<dt className="text-base font-medium leading-7 text-aoc-pink-light">
											<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg">
												<feature.icon className="h-6 w-6" aria-hidden="true" />
											</div>
											{feature.name}
										</dt>
										<dd className="mt-1 flex flex-auto flex-col text-base leading-7 font-light text-aoc-pink-light">
											<p className="flex-auto">{feature.description}</p>
											<p className="mt-6">
												<a href={feature.href} className="text-sm font-extralight leading-6 text-aoc-pink">
													Learn more <span aria-hidden="true">→</span>
												</a>
											</p>
										</dd>
									</div>
								))}
							</dl> */}
						</div>
					</div>
				</div>
			</Container>
		</section>
		
		
	)
}
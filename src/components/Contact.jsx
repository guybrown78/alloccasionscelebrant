import { Container } from './Container'

export function Contact(){
	return(

		<section 
			id="contact"
			aria-label="Contact details for Caroline Brown, Celebrant of all occassions in Middlesbrough, Teesside"
			className="bg-aoc-pink"
		>

			<Container>
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
			
						<div className="mx-auto lg:mx-0">
							
							<h2 className="text-3xl font-light tracking-tight text-aoc-navy-dark sm:text-4xl">Get in Touch</h2>

							<p>
								Do you have any questions or are you ready to start organising your unforgettable occasion? Let's make your celebration, your vision, a reality. Contact today and create something truly special. We are based in Middlesbrough and cover all of Teesside, Tees Valley and North Yorkshire.
							</p>

							<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-lg font-light leading-8 text-aoc-navy-dark lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
				
								<div>
									<h4 className="mb-2 text-md font-medium leading-4 text-slate-600">Email</h4>
									<a href="mailto:caroline@alloccasionscelebrant.com" className="text-md leading-4 text-slate-600 hover:text-slate-900 hover:underline">
										caroline@alloccasionscelebrant.com
									</a>
								</div>
								<div>
									<h4 className="mb-2 text-md font-medium leading-4 text-slate-600">Telephone</h4>
									<a href="tel:+447843498738" className="text-md leading-4 text-slate-600 hover:text-slate-900 hover:underline">
										07843 498738
									</a>
								</div>
								<div>
									<h4 className="mb-2 text-md font-medium leading-4 text-slate-600">Location</h4>
									<p className="text-md leading-6 text-slate-600">
										Nunthorpe,<br />Middlesbrough,<br />Teesside
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
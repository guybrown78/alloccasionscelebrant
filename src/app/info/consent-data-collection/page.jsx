
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Header />
      <main>
				<section
					id="consent-data-collection"
					aria-label="Consent Data Collection"
					className="py-20 sm:py-32"
				>
					<Container>
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-4">
								<h2 className='text-lg font-bold'>Privacy Policy for alloccasionscelebrant.com</h2>
								<p>Last updated: September 2023</p>

								<p>Please read these Terms and Conditions ("Terms") carefully before using All Occasions Celebrant ("we," "our," or "us") website and services.</p>

								<h3 className='font-semibold'>1. Acceptance of Terms</h3>
								<p>By accessing or using our website and services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.</p>

								<h3 className='font-semibold'>2. Use of Website</h3>
								<ul>
									<li>a. You must be at least 13 years old to use our website and services.</li>
									<li>b. You are responsible for ensuring that any information you provide on our website is accurate and up to date.</li>
								</ul>

								<h3 className='font-semibold'>3. Privacy Policy</h3>
								<p>Your use of our website and services is also governed by our Privacy Policy. Please review our <Link className="underline" href="../info/privacy">Privacy Policy</Link> to understand our data practices.</p>
								<p></p>
								<p></p>
								<p></p>
								<p></p>


								<h3 className='font-semibold'>4. </h3>
								<p></p>		
								<p></p>

								<h3 className='font-semibold'>5. </h3>
								<p>.</p>

								<h3 className='font-semibold'>6.</h3>
								<p></p>

								<h3 className='font-semibold'>7. </h3>
								<p>.</p>

								<h3 className='font-semibold'>8.</h3>
								<p></p>
							</div>
						</div>
					</Container>
				</section>
      </main>
      <Footer />
    </>
  )
}
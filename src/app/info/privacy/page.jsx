
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
					id="privacy"
					aria-label="Privacy Policy"
					className="py-20 sm:py-32"
				>
					<Container>
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-4">
								<h2 className='text-lg font-bold'>Privacy Policy for alloccasionscelebrant.com</h2>
								<p>Last updated: September 2023</p>

								<p>
								All Occasions Celebrant (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect the information you provide when you visit our website or use our contact form.
								</p>

								<h3 className='font-semibold'>1. Information We Collect</h3>
								<p>When you use our contact form, we may collect the following personal information:</p>
								<ul className="list-disc ml-4">
									<li>First Name</li>
									<li>Last Name</li>
									<li>Email Address</li>
									<li>Phone Number</li>
									<li>Type of Service Requested (e.g., funeral, wedding, renewal of vows, naming ceremony)</li>
									<li>Message</li>
								</ul>

								<h3 className='font-semibold'>2. How We Use Your Information</h3>
								<p>We use the information collected through our contact form for the following purposes:</p>
								<ul className="list-disc ml-4">
									<li>To respond to your inquiries and provide the requested services.</li>
									<li>To communicate with you regarding your specific service request.</li>
									<li>To improve our website and services.</li>
									<li>To comply with legal requirements.</li>
								</ul>

								<h3 className='font-semibold'>3. Sharing Your Information</h3>
								<p>We do not sell, rent, or trade your personal information with third parties. However, we may share your information with trusted service providers or partners who assist us in delivering our services or operating our website. These third parties are contractually obligated to maintain the confidentiality and security of your information.</p>
								


								<h3 className='font-semibold'>4. Google Analytics and Cookies</h3>
								<p>We may use Google Analytics to collect information about how visitors use our website. Google Analytics may use cookies to gather this information. For more information about Google Analytics and how it uses cookies, please refer to our separate <Link className="underline" href="../info/cookies">Cookie Policy</Link>.</p>		
								<p></p>

								<h3 className='font-semibold'>5. Security</h3>
								<p>We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet can be guaranteed as 100% secure. While we strive to protect your information, we cannot ensure or warrant the security of any information you transmit to us.</p>

								<h3 className='font-semibold'>6. Your Choices</h3>
								<p>You have the right to access, correct, or delete your personal information. You may also withdraw your consent for us to contact you at any time by contacting us at [contact email]. Please note that certain information may be necessary to provide you with our services, and withdrawing consent may affect our ability to do so.</p>

								<h3 className='font-semibold'>7. Changes to this Privacy Policy</h3>
								<p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date.</p>

								<h3 className='font-semibold'>8. Contact Us</h3>
								<p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>

								<ul>
									<li><a className="underline cursor-pointer" href="mailto:caroline@alloccasionscelebrant.com">caroline@alloccasionscelebrant.com</a></li>
									<li><a className="underline cursor-pointer" href="tel:+447843498738">07843 498738</a></li>
								</ul>

								<p>By using our website and contact form, you consent to the terms of this Privacy Policy and our separate <Link className="underline" href="../info/cookies">Cookie Policy</Link>.</p>
							</div>
						</div>
					</Container>
				</section>
      </main>
      <Footer />
    </>
  )
}




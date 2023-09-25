import { Container } from "./Container";
import Link from 'next/link'

export function PolicyTerms() {
  return (
    <Container>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none space-y-4">
					<h2 className='text-lg font-bold'>Terms and Conditions</h2>
					<p>Last updated: September 2023</p>

					<p>Please read these Terms and Conditions ("Terms") carefully before using All Occasions Celebrant ("we," "our," or "us") website and services.</p>

					<h3 className='font-semibold'>1. Acceptance of Terms</h3>
					<p>By accessing or using our website and services, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website or services.</p>

					<h3 className='font-semibold'>2. Use of Website</h3>
					<ul className='ml-4 italic'>
						<li><span className='font-semibold'>a.</span> You must be at least 13 years old to use our website and services.</li>
						<li><span className='font-semibold'>b.</span> You are responsible for ensuring that any information you provide on our website is accurate and up to date.</li>
					</ul>

					<h3 className='font-semibold'>3. Privacy Policy</h3>
					<p>Your use of our website and services is also governed by our Privacy Policy. Please review our <Link className="underline" href="../info/privacy">Privacy Policy</Link> to understand our data practices.</p>
					<p></p>


					<h3 className='font-semibold'>4. Service Requests</h3>
					<ul className='ml-4 italic'>
						<li><span className='font-semibold'>a.</span> When you submit a service request through our contact form, you agree to provide accurate and complete information.</li>
						<li><span className='font-semibold'>b.</span> We reserve the right to accept or decline any service request at our discretion.</li>
					</ul>

					<h3 className='font-semibold'>5. Intellectual Property</h3>
					<ul className='ml-4 italic'>
						<li><span className='semibold'>a.</span> All content on our website, including text, images, logos, and other materials, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without our permission.</li>
					</ul>

					<h3 className='font-semibold'>6. Limitation of Liability</h3>
					<ul className='ml-4 italic'>
						<li><span className='font-semibold'>a.</span> We do not guarantee the accuracy or completeness of the information provided on our website. We are not liable for any errors or omissions on the website or for any damages resulting from the use of the website or services.</li>
					</ul>

					<h3 className='font-semibold'>7. Third-Party Links</h3>
					<p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms and conditions of third-party websites.</p>

					<h3 className='font-semibold'>8. Changes to Terms</h3>
					<p>We may update these Terms from time to time. The updated Terms will be posted on our website with a revised "Last Updated" date. Your continued use of our website and services after the update constitutes acceptance of the revised Terms.</p>

					<h3 className='font-semibold'>9. Termination</h3>
					<p>We reserve the right to terminate or suspend your access to our website and services at any time, for any reason, without notice.</p>

					<h3 className='font-semibold'>10. Contact Us</h3>
					<p>If you have any questions or concerns about these Terms, please contact us at:</p>

					<ul>
						<li><a className="underline cursor-pointer" href="mailto:caroline@alloccasionscelebrant.com">caroline@alloccasionscelebrant.com</a></li>
						<li><a className="underline cursor-pointer" href="tel:+447843498738">07843 498738</a></li>
					</ul>

					<p>By using our website and services, you agree to abide by these Terms and Conditions.</p>
				</div>
			</div>
		</Container>
  )
}

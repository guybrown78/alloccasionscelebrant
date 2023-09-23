

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { SlimLayout } from '@/components/SlimLayout'
import { TestimonialCreateForm } from '@/components/TestimonialCreateForm'

export const metadata = {
  title: 'Create a new testimonial form for All Occasions Celebrant',
}

export default function Hello() {
  return (
		<>
		<main>
			<Header />
			<SlimLayout>
				<TestimonialCreateForm />
			</SlimLayout>
			<Footer />
		</main>
		</>
  )
}

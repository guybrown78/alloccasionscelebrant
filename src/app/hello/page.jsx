

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { SlimLayout } from '../../components/SlimLayout'
import { HelloForm } from '../../components/HelloForm'

export const metadata = {
  title: 'Message Contact form for All Occasions Celebrant',
}

export default function Hello() {
  return (
		<>
		<main>
			<Header />
			<SlimLayout>
				<HelloForm />
			</SlimLayout>
			<Footer />
		</main>
		
		</>
  )
}

import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { PolicyTerms } from '../../../components/PolicyTerms'


export default function Home() {
  return (
    <>
      <Header />
      <main>
				<section
					id="terms-conditions"
					aria-label="Terms and Conditions"
					className="py-20 sm:py-32"
				>
					<PolicyTerms />
				</section>
      </main>
      <Footer />
    </>
  )
}
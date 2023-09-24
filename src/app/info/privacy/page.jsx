

import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { PolicyPrivacy } from '../../../components/PolicyPrivacy'



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
					<PolicyPrivacy />
				</section>
      </main>
      <Footer />
    </>
  )
}




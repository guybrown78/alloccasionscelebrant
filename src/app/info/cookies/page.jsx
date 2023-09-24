import { Footer } from '../../../components/Footer'
import { Header } from '../../../components/Header'
import { PolicyCookie } from '../../../components/PolicyCookie'


export default function Home() {
  return (
    <>
      <Header />
      <main>
				<section
					id="cookies"
					aria-label="Cookie Policy"
					className="py-20 sm:py-32"
				>
					<PolicyCookie />
				</section>
      </main>
      <Footer />
    </>
  )
}
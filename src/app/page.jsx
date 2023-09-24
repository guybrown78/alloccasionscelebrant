
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { CarolineBrown } from '../components/CarolineBrown'
import { Contact } from '../components/Contact'
import { CallToAction } from '../components/CallToAction'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
				<Services />
				<About />
				<CarolineBrown />
				<Contact />
				<CallToAction />
      </main>
      <Footer />
    </>
  )
}

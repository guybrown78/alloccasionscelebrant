
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { CarolineBrown } from '@/components/CarolineBrown'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
				<Services />
				<About />
				<CarolineBrown />
      </main>
      <Footer />
    </>
  )
}

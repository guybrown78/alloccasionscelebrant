import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import { Button } from '@/components/Button'
import { SelectField, TextField, TextAreaField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Hello',
}

export default function Hello() {
  return (
		<>
		<main>
			<Header />
			<SlimLayout>
				<div className="flex">
					<Link href="/" aria-label="Home">
						<Logo className="h-7 w-auto" />
					</Link>
				</div>
				<h2 className="mt-10 text-lg font-semibold text-gray-900">
					It starts with a hello
				</h2>
				<p className="mt-2 text-sm text-gray-700">
					Whatever you are looking for, we are here to help you along the journey. Simply fill in your contact details, select a service and we'll do the rest.
				</p>
				<form
					action="#"
					className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
				>
					<TextField
						label="First name"
						id="first_name"
						name="first_name"
						type="text"
						autoComplete="given-name"
						required
					/>
					<TextField
						label="Last name"
						id="last_name"
						name="last_name"
						type="text"
						autoComplete="family-name"
						required
					/>
					<TextField
						className="col-span-full"
						label="Email address"
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						required
					/>
					<TextField
						className="col-span-full"
						label="Phone number"
						id="phone"
						name="phone"
						type="phone"
						autoComplete="tel"
					/>
					<SelectField
						className="col-span-full"
						label="What service can we help you with?"
						id="service"
						name="service"
					>
						<option>Funerals</option>
						<option>Weddings</option>
						<option>Renewal of Vows</option>
						<option>Naming Ceremonies</option>
					</SelectField>
					<TextAreaField
						className="col-span-full"
						label="Message"
						id="message"
						name="message"
						rows={2}
					/>
					<div className="col-span-full">
						<Button type="submit" variant="solid" color="pink" className="w-full">
							<span>
								Say hello <span aria-hidden="true">&rarr;</span>
							</span>
						</Button>
					</div>
				</form>
			</SlimLayout>
			<Footer />
		</main>
		
		</>
  )
}

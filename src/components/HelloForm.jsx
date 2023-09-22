
'use client'

import { Button } from '@/components/Button'

import { TextField, SelectField, TextAreaField } from '@/components/Fields'
import Airtable from "airtable";
import { useState } from "react";
import { Logo } from './Logo';
import Link from 'next/link';


const formatDate = async () => {
	let d = new Date(),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

	if (month.length < 2) 
			month = '0' + month;
	if (day.length < 2) 
			day = '0' + day;

	return [year, month, day].join('-');
}


export function HelloForm() {

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);


	// Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

		setIsSuccess(false)
		setIsError(false)
		setIsLoading(true);

		var base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);

		const date = await formatDate()

		console.log("date", date)
		base('WebsiteContactForm').create([
			{
				"fields": {
						FirstName: event.target.first_name.value,
						LastName: event.target.last_name.value,
						Email: event.target.email.value,
						Phone: event.target.phone.value,
						Service: event.target.service.value,
						Message: event.target.message.value,
						SentDate: date,
				}
			},

		], function(err, records) {
			if (err) {
				console.error(err);
				setIsError(true)
				// setIsLoading(false);

				return;
			}
			records.forEach(function (record) {
				console.log(record.getId());
				setIsSuccess(true);
				setIsLoading(false);
			});
		});
		
  }


	return(
		<>
			<div className="flex">
				{/* <Link href="/" aria-label="Home"> */}
					<Logo className="h-7 w-auto" />
				{/* </Link> */}
			</div>

			<h2 className="mt-10 text-lg font-semibold text-aoc-navy">
				It starts with a hello
			</h2>
			<p className="mt-2 text-sm text-aoc-navy">
				Whatever you are looking for, we are here to help you along the journey. Simply fill in your contact details, select a service and we'll do the rest.
			</p>

			<form
				className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
				onSubmit={(e) => handleSubmit(e)}
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
				{ !isSuccess && !isError && (
					<div className="col-span-full">
						<Button type="submit" variant="solid" color="pink" className="w-full">
							{
								!isLoading && (
									<span>
										Say hello <span aria-hidden="true">&rarr;</span>
									</span>
								)
							}
							{
								isLoading && (
									<span>
										Sending <span aria-hidden="true">...</span>
									</span>
								)
							}
						</Button>
					</div>
				)}
				{ isSuccess && (
					<div className="col-span-full bg-green-50 p-4 rounded-md">
						<p className='font-light text-sm text-aoc-navy'>
							<span className='font-semibold'>Thank you.</span> Your message has been received, and you will be contacted shortly.
						</p>
					</div>
				)}
				{ isError && (
					<div className="col-span-full bg-pink-50 p-4 rounded-md">
						<p className='font-light text-sm text-aoc-navy'>
							<span className='font-semibold'>Oh dear.</span> There has been a problem while sending your message. This will be resolved as soon as possible. 
						</p>
						<p className='font-light text-sm text-aoc-navy mt-2'>
							In the meantime, please send any messages direct to <a href="mailto:caroline@alloccasionscelebrant.com" target="_blank" className='font-medium underline cursor-pointer'>caroline@alloccasionscelebrant.com</a>
						</p>
					</div>
				)}
				<ul className='col-span-full text-xs flex space-x-5 mt-4 mx-auto'>
						<li><Link href="../info/privacy"className='underline'>Privacy Policy</Link></li>
						<li><Link href="../info/terms"className='underline'>Terms and Conditions</Link></li>
					</ul>
			</form>
		</>
	)
	
	
}
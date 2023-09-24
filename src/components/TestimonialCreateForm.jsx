
'use client'

import { Button } from './Button'

import { TextField, SelectField, TextAreaField } from './Fields'
import Airtable from "airtable";
import { useState } from "react";
import { Logo } from './Logo';
import Link from 'next/link';


const Spinner = () => {
	return(
		<svg viewBox="0 0 16 16">
			<path d="M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z" />
			
		</svg>
	)

}
const ArrowRight = () => {
	return (
		<svg viewBox="0 0 16 16">
			<path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z" />
		</svg>
	)
}


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


export function TestimonialCreateForm() {

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
		base('Testimonials').create([
			{
				"fields": {
						Name: event.target.name.value,
						Service: event.target.service.value,
						Testimonial: event.target.testimonial.value,
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
				Share Your Experience
			</h2>
			<p className="mt-2 text-sm text-aoc-navy">
				Your feedback is incredibly valuable. Your thoughts, experiences, and kind words hold immense significance. Thank you for taking a moment to share your testimonial.
			</p>

			<form
				className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
				onSubmit={(e) => handleSubmit(e)}
			>
				<TextField
					label="name"
					id="name"
					name="name"
					type="text"
					autoComplete="name"
					className='col-span-full'
					required
				/>
				<SelectField
					className="col-span-full"
					label="What service did you experience?"
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
					label="Your Words"
					id="testimonial"
					name="testimonial"
					rows={5}
				/>
				{ !isSuccess && !isError && (
					<div className="col-span-full">
						<Button type="submit" variant="solid" color="pink" className="w-full">
							{
								!isLoading && (
									<span className='flex items-center'>
										Send your testimonial <span aria-hidden="true" className="ml-2 w-5 h-5 fill-aoc-navy"><ArrowRight /></span>
									</span>
									// <span aria-hidden="true">&rarr;</span>
								)
							}
							{
								isLoading && (
									<span className='flex items-center'>
										Sending <span aria-hidden="true" className="ml-2 w-5 h-5 animate-spin fill-aoc-navy"><Spinner /></span>
									</span>
								)
							}
						</Button>
					</div>
				)}
				{ isSuccess && (
					<div className="col-span-full bg-green-50 p-4 rounded-md">
						<p className='font-light text-sm text-aoc-navy'>
							<span className='font-semibold'>Thank you.</span> Your words have been received.
						</p>
					</div>
				)}
				{ isError && (
					<div className="col-span-full bg-pink-50 p-4 rounded-md">
						<p className='font-light text-sm text-aoc-navy'>
							<span className='font-semibold'>Oh dear.</span> There has been a problem while sending your words. This will be resolved as soon as possible. 
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
import Link from 'next/link'

import Image from 'next/image'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { LogoStamp } from '@/components/LogoStamp'
import { NavLink } from '@/components/NavLink'

import fellowshipOfProfCelLogo from '@/images/fellowship-of-professional-celebrants.png'

export function Footer() {
  return (
    <footer className="bg-white">
      <Container>
			


			<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">

						<Logo className="h-7 w-auto" />
            <p className="text-sm leading-6 text-gray-600">
							Independent celebrant of all occasions based in Teesside and North Yorkshire.
            </p>
            <div className="flex space-x-6">

						<Link	
									href="https://www.tiktok.com/@all_occasions_cel"
									className="group"
									aria-label="All Occasions Celebrant on TikTok"
								>
									<svg
										aria-hidden="true"
										className="h-6 w-6 fill-slate-500 group-hover:fill-slate-800"
									>
										<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
									</svg>
								</Link>
								<Link
									href="https://www.instagram.com/all_occasions_celebrant"
									className="group"
									aria-label="All Occasions Celebrant on Instagram"
								>
									<svg
										aria-hidden="true"
										className="h-6 w-6 fill-slate-500 group-hover:fill-slate-800"
									>
										<path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle>	
									</svg>
								</Link>
								<Link
									href="https://www.facebook.com/alloccasionscelebrantservices/"
									className="group"
									aria-label="All Occasions Celebrant on facebook"
								>
									<svg
										aria-hidden="true"
										className="h-6 w-6 fill-slate-500 group-hover:fill-slate-800"
									>
										<path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
									</svg>
								</Link>
								<Link
									href="https://linkedin.com/company/alloccasionscelebrant"
									className="group"
									aria-label="All Occasions Celebrant on LinkedIn"
								>
									<svg
										aria-hidden="true"
										className="h-6 w-6 fill-slate-500 group-hover:fill-slate-800"
									>
									<circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
									</svg>
								</Link>

            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Services</h3>
									<ul role="list" className="mt-6 space-y-4">
										
										<li>
											<a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
												Funerals
											</a>
										</li>
										<li>
											<a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
												Weddings
											</a>
										</li>
										<li>
											<a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
												Renewal of Vows
											</a>
										</li>
										<li>
											<a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
												Naming Ceremonies
											</a>
										</li>
								</ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">About</h3>
									<ul role="list" className="mt-6 space-y-4">
										
										<li>
											<a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
												Company insights
											</a>
										</li>
										<li>
											<a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
												Caroline Brown
											</a>
										</li>
								
								</ul>
              </div>
							<div className="col-span-2 md:col-span-1">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
								<ul role="list" className="mt-6 space-y-4">
                 
                    <li>
                      <a href="tel:+447459 953658" className="text-sm leading-4 text-slate-600 hover:text-slate-900">
                        07459 953658
                      </a>
										</li>
										<li>
											<a href="#" className="text-sm leading-4 text-slate-600 hover:text-slate-900">
												caroline@alloccasionscelebrant.com
                      </a>
                    </li>
               
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>




        {/* <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
							<NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </nav>
        </div> */}


				<div className="flex flex-col md:flex-row items-center justify-center md:justify-between">

					<ul className='text-xs flex space-x-5 ml-0 md:ml-8'>
						<li><Link href="../info/privacy"className='underline'>Privacy Policy</Link></li>
						<li><Link href="../info/terms"className='underline'>Terms and Conditions</Link></li>
						<li><Link href="../info/cookies"className='underline'>Cookie Policy</Link></li>
					</ul>

					<a href="https://professionalcelebrants.org.uk" target='_blank' className="flex flex-col md:flex-row items-center justify-center md:justify-end py-1 mt-4">
					<div className="flex flex-col items-end pb-1">
						<div className="text-xs text-right">Proud to be a member of the </div>
						<div className="text-xs text-right hidden md:inline whitespace-nowrap text-pink-900">Fellowship of Professional Celebrants</div>
					</div>
					

						<Image
							className="w-40 md:w-48"
							src={fellowshipOfProfCelLogo }
							alt="Fellowship of Professional Celebrants"
							unoptimized
						/>
					</a>
				</div>
				

				
				
			</Container>	

			<div className="border-t border-aoc-pink-dark/40 bg-aoc-pink/10">
				<Container>
					<div className="flex flex-col items-center py-10 sm:flex-row-reverse sm:justify-between">
						
							<LogoStamp className="w-16 sm:w-20 fill-aoc-pink/80"/>
							<p className="mt-6 text-center md:text text-sm text-slate-500 sm:mt-0">
								Copyright &copy; {new Date().getFullYear()} All Occasions Celebrant. All&nbsp;rights&nbsp;reserved.
							</p>
							

						</div>
				</Container>
			</div>
			
    </footer>
  )
}

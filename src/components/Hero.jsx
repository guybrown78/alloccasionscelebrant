
import { Container } from '@/components/Container'
import { LogoStamp } from '@/components/LogoStamp'

function Underline(){
	return (
		<svg viewBox="0 0 342 55" className="absolute left-0 top-1/3 h-[0.58em] w-full " aria-hidden="true" preserveAspectRatio="none">
			<path d="M20,49 C98.7571043,35.716561 240.347908,31.1558189 322,35.716561" stroke="#FBEAEB" strokeWidth="39" />
		</svg>
	)
}


function GradTop(){
	return (
		<svg className="absolute z-20 top-0 right-0 w-screen h-24">
				<defs>
						<linearGradient x1="48.2600925%" y1="100%" x2="48.2600925%" y2="13.5139628%" id="linearGradient-1">
								<stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
								<stop stop-color="#FFFFFF" offset="100%"></stop>
						</linearGradient>
				</defs>
				<rect fill="url(#linearGradient-1)" className="w-screen h-24" />
		</svg>	
	)
}
function GradBottom(){
	return (
		<svg className="absolute z-20 bottom-0 right-0 w-screen h-24">
				<defs>
					<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FBEAEB" offset="100%"></stop>
        	</linearGradient>
				</defs>
				<rect fill="url(#linearGradient-2)" className="w-screen h-24" />
		</svg>
	)
}
function Background() {
	return (
		<div className="absolute inset-y-0 block h-full w-screen" aria-hidden="true">
        <div className="relative mx-auto h-full">
					<GradTop className="w-full h-24"/>
          <LogoStamp className="transition scale-125 translate-y-1/3 translate-x-1/4 md:scale-150 md:translate-y-0 md:translate-x-2/4 lg:scale-100 lg:translate-x-1/4 fill-aoc-pink-light"/>
					<GradBottom className="w-full h-24"/>
        </div>
		</div>
	)
	
}
export function Hero() {
  return (
			<div className="relative overflow-hidden bg-aoc-pink">
				<Background />
				<div className="relative pb-16 pt-6 sm:pb-24 ">
					<Container className="pb-16 pt-20 text-center lg:pt-32">
						<h1 className="mx-auto max-w-4xl font-display text-5xl font-light  tracking-wide text-aoc-navy sm:text-7xl leading-10 bg-aoc-pink/20">
							A&nbsp;
							<span className="relative whitespace-nowrap">
								<Underline />
								<span className="relative">Positive</span>
							</span>
							&nbsp;and{' '}
							<span className="relative whitespace-nowrap">
								<Underline />
								<span className="relative">Personable</span>
							</span>
							{' '}Presence.
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-lg font-light tracking-tight text-aoc-navy">
							Independent celebrant of all occasions.
						</p>
						</Container>
				</div>
			</div>
  )
}

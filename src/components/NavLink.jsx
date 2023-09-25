import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export function NavLink({ href, children }) {

	const router = useRouter();
	const pathname = usePathname();


	const handleAnchor = (event) => {
		event.preventDefault();
		if(pathname === "/"){
			if (href.includes("#")) {
				// event.preventDefault();
				window.location.hash = ''
				window.location.hash = href
			}
		}else{
			router.push(`../${href}`)
		}
	}
	



  return (
    <Link
      href={href}
			onClick={(e) => handleAnchor(e)}
      className="inline-block rounded-lg px-2 py-1 text-sm text-aoc_navy hover:bg-aoc-pink-light hover:text-aoc_navy-light"
    >
      {children}
    </Link>
  )
}

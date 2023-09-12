import { Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - All Occasions Celebrant',
    default: 'All Occasions Celebrant - Independent celebrant of all occasions',
  },
  description:
    'Independent celebrant of all occasions. Providing a positive and personable presence.',
}

const poppins = Poppins({
  subsets: ['latin'],
	weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-poppins',
})

// const lexend = Lexend({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-lexend',
// })

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        poppins.variable
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

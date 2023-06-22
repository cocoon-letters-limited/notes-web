import { Metadata } from 'next'
import '../styles/globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mulish',
  })

export const metadata: Metadata = {
  title: 'iNoteOPX',
  description: 'Make your assets do much more in one place',
  applicationName: "iNOteOPX",
  keywords: ["aseets", "management", "maintenance", "development center", "supply chain", "safety management"],
  authors: {
    name: "Abayomi Olatunji"
  },
  themeColor: "white"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${mulish.variable}`}>
      <body>
        {children}</body>
    </html>
  )
}

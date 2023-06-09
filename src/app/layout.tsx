import Footer from './(layouts)/Footer'
import Navbar from './(layouts)/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: {
    template: 'DigitalGrowth: %s',
    default: 'DigitalGrowth'
  },
  description: 'A startup business, providing solutions for web dev, mobile app dev',
  openGraph: {
    title: 'DigitalGrowth',
    description: 'A startup business, providing solutions for website development, app development',
    type: 'website',
    site_name: 'DigitalGrowth',
    url: 'https://digital-growth.vercel.app/',
    images: '/DG_ShareImage.webp'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
// just a comment

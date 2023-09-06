import Image from 'next/image'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Iconic Energy Solution',
  description: 'Iconic Energy Solution is renowned service provideer company dealing in Standby Power, Civil Works and Air Conditioning Systems in the Banking, Restaurants, Textile & Education sectors.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-black bg-white`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

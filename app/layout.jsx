import Nav from '@/components/Layout/Nav'
import Footer from '@/components/Layout/Footer'

export const metadata = {
  title: 'IEEE SB VJEC',
  description: 'The official website of IEEE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

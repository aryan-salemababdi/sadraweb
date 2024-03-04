import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import './globals.css';
import localFont from "next/font/local"
import type { Metadata } from 'next';


const vazir = localFont({
  src: [{
    path: "../public/fonts/Vazir.ttf",
    weight: "100",
    style: "normal"
  }]
})


export const metadata: Metadata = {
  title: 'امیر صدرا نورمحمدی',
  description: 'وبسایت شخصی امیر صدرا نورمحمد',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={vazir.className}>
          <header>
            <Header>{children}</Header>
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
      </body>
    </html>
  )
}

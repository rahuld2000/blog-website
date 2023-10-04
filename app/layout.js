
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

import { AuthProvider } from '@/utils/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BLOGSPOT',
  description: 'blog website for earth',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
      <Navbar/>
      {children}
     
      </AuthProvider>
    
      
      </body>
    </html>
  )
}

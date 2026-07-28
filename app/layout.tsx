 import type { Metadata } from 'next'
 import { Inter } from 'next/font/google'
 import './globals.css'
 
 const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
 })
 
 export const metadata: Metadata = {
   title: 'Eastern Flow Feng Shui — Align Your Home, Shift Your Energy',
   description:
     'Remote Feng Shui consultations that align your home\'s energy with the life you want. 90-minute video session, written report, and follow-up. Book your Home Energy Assessment today.',
   openGraph: {
     title: 'Eastern Flow Feng Shui — Align Your Home, Shift Your Energy',
     description:
       'Remote Feng Shui consultations that align your home\'s energy with the life you want. Book your session today.',
     url: 'https://easternflowfengshui.com',
     siteName: 'Eastern Flow Feng Shui',
     locale: 'en_US',
     type: 'website',
   },
   twitter: {
     card: 'summary_large_image',
     title: 'Eastern Flow Feng Shui — Align Your Home, Shift Your Energy',
     description:
       'Remote Feng Shui consultations that align your home\'s energy with the life you want. Book your session today.',
   },
   robots: {
     index: true,
     follow: true,
   },
 }
 
 export default function RootLayout({
   children,
 }: Readonly<{
   children: React.ReactNode
 }>) {
   return (
     <html lang="en" className={inter.className}>
       <body className="antialiased">{children}</body>
     </html>
   )
 }

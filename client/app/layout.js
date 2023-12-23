import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers';
import {Navbar} from "@/app/components/Navbar/Navbar";
import { GlobalContextProvider } from "@/app/Context/store";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <main className="w-[100vw] min-h-[100vh]">
                <GlobalContextProvider>
                    <Navbar />
                    { children }
                </GlobalContextProvider>
            </main>
        </Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'IMDb API Client',
    description: 'An application that displays the top 10 movies from IMDb',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-full h-20 bg-emerald-800 sticky top-0 z-20">
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex justify-center items-center h-full">
                            <ul className="flex gap-x-6 text-white underline">
                                <li>
                                    <Link href="/task-1">
                                        <p>Client Side Fetching</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/task-2">
                                        <p>Server Side Fetching</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <main className="flex min-h-screen flex-col items-center px-20 pb-10">
                    {children}
                </main>
            </body>
        </html>
    )
}

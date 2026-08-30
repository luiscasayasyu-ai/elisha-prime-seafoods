import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Elisha Prime Seafoods | Fresh. Premium. Delivered.',description:'Premium seafood for families and businesses.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
// app/layout.tsx
'use client'
import Header from './components/header';
import Footer from './components/footer';
import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';  

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname(); 
  const [is404, setIs404] = useState(false);

  useEffect(() => {
   
    if (pathname && pathname.includes('404')) {
      setIs404(true);
    } else {
      setIs404(false);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {!is404 && <Header />} 
        <main>{children}</main>
        {!is404 && <Footer />} 
      </body>
    </html>
  );
}

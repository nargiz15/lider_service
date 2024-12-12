
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <main>
        <Header/>

        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

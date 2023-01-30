import './bootstrap.min.css'
import './main.css'
import './theme-dark.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
          <body className="webpage">
              <Header />
              {children}
              <Footer />
          </body>
    </html>
  )
}

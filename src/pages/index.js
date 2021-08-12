import React from "react"
import Navbar from "../components/Navbar"
import Mainpage from "../components/Mainpage"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import { LanguageProvider } from "../Helper/LanguageContext"

export default function Home() {
  return (
    <div>
      <SEO
        title="Language Identifier | What Language Is This Text"
        description="Identify every language using a custom NLP N-GRAM sequencing."
      />
      <LanguageProvider>
        <div className="h-screen">
          <Navbar />
          <Mainpage />
        </div>
        <Footer />
      </LanguageProvider>
    </div>
  )
}

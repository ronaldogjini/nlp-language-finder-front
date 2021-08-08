import React from "react"
import Navbar from "../components/Navbar"
import Mainpage from "../components/Mainpage"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <Mainpage />
      </div>
      <Footer />
    </div>
  )
}

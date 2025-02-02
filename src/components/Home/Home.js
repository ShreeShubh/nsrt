import React from "react"
import Header from "../Header/Header"
import Introduction from "../Introduction/Introduction"
import AboutMe from "../AboutMe/AboutMe"
import Services from "../Services/Services"
import Facts from "../Facts/Facts"
import Portfolio from "../Portfolio/Portfolio"
import Scrollspy from "../Scrollspy/Scrollspy"
import Footer from "../Footer/Footer"
import ContactUs from "../ContactUs/ContactUs"

const Home = () => {
  return (
    <>
      <Header />
      <div className="background py-3">
        <div className="flex justify-between max-w-screen-2xl px-10 mx-auto gap-5">
          {/* main container */}
          <div className="">
            <section id="introduction">
              <Introduction />
            </section>
            <section id="aboutMe">
              <AboutMe />
            </section>
            <section id="professionalExperties">
              <Services />
            </section>
            <section id="facts">
              <Facts />
            </section>
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="contactUs">
              <ContactUs />
            </section>

            <Footer />
          </div>

          {/* scrollspy section */}
          <Scrollspy />
        </div>
      </div>
    </>
  )
}

export default Home

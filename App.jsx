import Navbar from "./Navbar.jsx";
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Portfolio from './components/Portfolio.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-void font-body text-paper">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <Portfolio />
        <BeforeAfter />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <ProductShowcase />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

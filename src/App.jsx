import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Expertise from './components/Expertise'
import Education from './components/Education'
import Projects from './components/Projects'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Services />
        <Expertise />
        <Projects />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

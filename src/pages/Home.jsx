import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Valeurs from '../components/Valeurs'
import Services from '../components/Services'
import Apropos from '../components/Apropos'
import Equipe from '../components/Equipe'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Valeurs />
      <Services />
      <Apropos />
      <Equipe />
      <Portfolio/>
      <Contact/>
      <Footer />
    </main>
  )
}

export default Home
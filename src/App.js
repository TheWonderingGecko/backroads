import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Hero from './components/Hero'
import Tours from './components/Tours'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App

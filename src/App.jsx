import './App.css'
import Best from './components/Best/Best'
import Coming from './components/Coming/Coming'
import Footer from './components/Footer/Footer'
import Genres from './components/Genres/Genres'
import Hero from './components/Hero/Hero'
import Popular from './components/Popular/Popular'
import Reviews from './components/Reviews/Reviews'
import Why from './components/Why/Why'

function App() {
  return (
    <div className="font-Lexend bg-backgroundColor">
      <Hero />
      <Why />
      <Genres />
      <Best />
      <Popular />
      <Coming />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App

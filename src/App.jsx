import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Contact from './components/Contact'
import ContactPage from './pages/ContactPage'
const HomePage = () => (
  <>
  < Hero />
 < About />
 < Features />
 < Contact />
  </>
)
const App = () => {
  return (
    <Router>
<main className="relative min-h-screen w-screen overflow-x-hidden">
< Navbar />
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/contact' element={<ContactPage />} />
</Routes>
</main>
</Router>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HeroSection } from './components/HeroSection'
import { Header } from './components/Header'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ProductsSection } from './components/ProductsSection'
import { ClientReviewsSection } from './components/ClientReviewsSection'
import { NewsSection } from './components/NewsSection'
import { Footer } from './components/Footer'
import HealthcareDesignSystem from './HealthcareDesignSystem'
import Banner from './components/Banner'
import SeniorCareComponent from './components/SeniorCareComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
       <div className="min-h-screen bg-white">
      <Header />
      <Banner></Banner>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProductsSection />
      <SeniorCareComponent />
      <ClientReviewsSection />
      <NewsSection />
      <Footer />
      {/* <HealthcareDesignSystem /> */}
    </div>
  )
}

export default App

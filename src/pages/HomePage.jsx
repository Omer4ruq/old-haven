import React from 'react';
// import { Header } from '../components/Header';
import Banner from '../components/Banner';
import { HeroSection } from '../components/HeroSection';
import { FoundersSection } from '../components/FoundersSection';
import { ServicesSection } from '../components/ServicesSection';
import { TeamMembersSection } from '../components/TeamMembersSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ProductsSection } from '../components/ProductsSection';
import SeniorCareComponent from '../components/SeniorCareComponent';
import { ClientReviewsSection } from '../components/ClientReviewsSection';
import { NewsSection } from '../components/NewsSection';
import { Footer } from '../components/Footer';

const HomePage = () => {
    return (
              <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Banner />
      {/* <HeroSection /> */}
      <ServicesSection />
      <FoundersSection />
      <TeamMembersSection />
      <TestimonialsSection />
      <ProductsSection />
      <SeniorCareComponent />
      <ClientReviewsSection />
      <NewsSection />
      {/* <Footer /> */}
      {/* <HealthcareDesignSystem /> */}
    </div>
    );
};

export default HomePage;
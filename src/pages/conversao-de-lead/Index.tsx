import React from 'react';
import Navbar from '@/components/conversao-de-lead/Navbar';
import HeroSection from '@/components/conversao-de-lead/HeroSection';
import FeaturesSection from '@/components/conversao-de-lead/FeaturesSection';
import TestimonialsSection from '@/components/conversao-de-lead/TestimonialsSection';
import CTASection from '@/components/conversao-de-lead/CTASection';
import Footer from '@/components/conversao-de-lead/Footer';

const Index = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Index;

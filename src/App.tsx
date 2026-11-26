import { useState } from 'react';
import { CategorySlug } from './data/categories';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | CategorySlug>('all');

  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#241B15] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories onSelectCategory={setSelectedCategory} />
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <WhyChooseUs />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

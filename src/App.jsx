import React, { useState, useEffect } from 'react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

// Home Sections
import Hero from './pages/Hero';
import Categories from './pages/Category/Categories';
import CategoryDetail from './pages/Category/CategoryDetail';
import DealsPage from './pages/DealsPage';

// New Professional Sections
import PromoSlider from './pages/home/PromoSlider';
import FlashDeals from './pages/home/FlashDeals';
import BrandSpotlight from './pages/home/BrandSpotlight';
import TrustBar from './pages/home/TrustBar';
import ContactUs from './pages/home/ContactUs';

// Data
import { products } from './data/products';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Scroll behavior when category changes or home is clicked
  useEffect(() => {
    if (!selectedCategory) {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const handleHomeNav = (hash) => {
    setSelectedCategory(null);
    setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  // Logic to get a diverse, randomized mix of products for the homepage
  const getFeaturedProducts = () => {
    const categories = [...new Set(products.map(p => p.category))];
    let diverseProducts = [];

    // 1. Pick one random product from each category first to guarantee representation
    categories.forEach(cat => {
      const catProducts = products.filter(p => p.category === cat);
      const randomProduct = catProducts[Math.floor(Math.random() * catProducts.length)];
      if (randomProduct) diverseProducts.push(randomProduct);
    });

    // 2. Fill the remaining slots (up to 16) with other high-rated products
    const remaining = products.filter(p => !diverseProducts.includes(p));
    const sortedRemaining = [...remaining].sort((a, b) => b.rating - a.rating);
    diverseProducts.push(...sortedRemaining.slice(0, 16 - diverseProducts.length));

    // 3. Shuffle the final list so the order is different every time (Mosaic effect)
    return diverseProducts.sort(() => Math.random() - 0.5).slice(0, 16);
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col font-outfit bg-gray-50/30">
      <Header
        cartCount={cartCount}
        onCartClick={handleAddToCart}
      />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 pb-24">
        {selectedCategory === 'DEALS' ? (
          <DealsPage
            products={products}
            onBack={() => setSelectedCategory(null)}
            onAddToCart={handleAddToCart}
          />
        ) : selectedCategory ? (
          <CategoryDetail
            category={selectedCategory}
            products={filteredProducts}
            onBack={() => setSelectedCategory(null)}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <>
            <Hero />

            {/* New Professional Banner Section */}
            <PromoSlider />

            <Categories
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            {/* New Flash Deals Section */}
            <FlashDeals
              products={products}
              onAddToCart={handleAddToCart}
              onViewAllDeals={() => setSelectedCategory('DEALS')}
            />

            {/* New Brand Spotlight */}
            <BrandSpotlight />

            {/* Customer Trust Indicators */}
            <TrustBar />

            {/* Contact Us Section */}
            <ContactUs />
          </>
        )}
      </main>

      <Footer
        onHomeClick={() => handleHomeNav()}
        onDealsClick={() => setSelectedCategory('DEALS')}
      />

      <BottomNav
        onNavClick={handleHomeNav}
        onDealsClick={() => setSelectedCategory('DEALS')}
      />
    </div>
  );
}

export default App;

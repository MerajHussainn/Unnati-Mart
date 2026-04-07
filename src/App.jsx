import React, { useState, useEffect } from 'react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

// Home Sections
import Hero from './pages/Hero';
import Categories from './pages/Categories';
import FeaturedProducts from './pages/FeaturedProducts';
import CategoryDetail from './pages/CategoryDetail';

// New Professional Sections
import PromoSlider from './pages/home/PromoSlider';
import FlashDeals from './pages/home/FlashDeals';
import BrandSpotlight from './pages/home/BrandSpotlight';
import TrustBar from './pages/home/TrustBar';

// Data
import { products } from './data/products';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory]);

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
        {selectedCategory ? (
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
              products={products.filter(p => p.isDeal)}
              onAddToCart={handleAddToCart}
            />

            {/* New Brand Spotlight */}
            <BrandSpotlight />

            <FeaturedProducts
              products={getFeaturedProducts()}
              onAddToCart={handleAddToCart}
              selectedCategory={null}
            />

            {/* Customer Trust Indicators */}
            <TrustBar />
          </>
        )}
      </main>

      <Footer />

      <BottomNav />
    </div>
  );
}

export default App;

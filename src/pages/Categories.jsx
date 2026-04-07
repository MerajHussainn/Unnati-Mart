import React from 'react';
import { ChevronRight, X, LayoutGrid } from 'lucide-react';

// Assets
import catVeg from '../assets/cat_veg_alt.png';
import catFruits from '../assets/cat_fruits_alt.png';
import catMeat from '../assets/cat_meat_alt.png';
import catFish from '../assets/cat_fish_alt.png';
import catNuts from '../assets/cat_nuts_alt.png';
import catDairy from '../assets/category_dairy.png';
import catGrains from '../assets/category_grains.png';

const Categories = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    { name: 'Vegetables', items: '45+ Products', img: catVeg, theme: 'bg-emerald-50 hover:bg-emerald-100/80 border-emerald-100/50' },
    { name: 'Fruits', items: '32+ Products', img: catFruits, theme: 'bg-teal-50 hover:bg-teal-100/80 border-teal-100/50' },
    { name: 'Pulses & Dal', items: '20+ Products', img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80', theme: 'bg-orange-50 hover:bg-orange-100/80 border-orange-100/50' },
    { name: 'Cooking Oils', items: '12+ Products', img: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80', theme: 'bg-yellow-50 hover:bg-yellow-100/80 border-yellow-100/50' },
    { name: 'Dairy & Eggs', items: '24+ Products', img: catDairy, theme: 'bg-orange-50 hover:bg-orange-100/80 border-orange-100/50' },
    { name: 'Cereals', items: '15+ Products', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', theme: 'bg-yellow-50 hover:bg-yellow-100/80 border-yellow-100/50' },
    { name: 'Fresh Meat', items: '18+ Products', img: catMeat, theme: 'bg-amber-100/30 hover:bg-amber-100/60 border-amber-200/50' },
    { name: 'Dry Fruits', items: '22+ Products', img: catNuts, theme: 'bg-rose-50 hover:bg-rose-100/80 border-rose-100/50' },
    { name: 'Grains & Flour', items: '12+ Products', img: catGrains, theme: 'bg-amber-50 hover:bg-amber-100/80 border-amber-100/50' },
    { name: 'Juices', items: '10+ Products', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80', theme: 'bg-red-50 hover:bg-red-100/80 border-red-100/50' },
    { name: 'Spices', items: '30+ Products', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80', theme: 'bg-indigo-50 hover:bg-indigo-100/80 border-indigo-100/50' },
    { name: 'Home & Hygiene', items: '25+ Products', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', theme: 'bg-blue-50 hover:bg-blue-100/80 border-blue-100/50' },
    { name: 'Organic Snacks', items: '18+ Products', img: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=600&q=80', theme: 'bg-violet-50 hover:bg-violet-100/80 border-violet-100/50' },
  ];

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      onCategorySelect(null); // Clear selection if clicking the same category
    } else {
      onCategorySelect(categoryName);
    }
  };

  return (
    <section id="categories" className="py-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-charcoal">
            {selectedCategory ? `Browsing ${selectedCategory}` : "Popular Categories"}
          </h2>
          <p className="text-gray-500 font-medium">Explore our wide range of fresh products</p>
        </div>
        <button
          onClick={() => onCategorySelect(null)}
          className={`text-primary font-bold flex items-center gap-1 group transition-all ${selectedCategory ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          View All <X size={20} className="group-hover:rotate-90 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((cat, i) => {
          const isActive = selectedCategory === cat.name;
          const isExternal = typeof cat.img === 'string' && cat.img.startsWith('http');

          return (
            <div
              key={i}
              onClick={() => handleCategoryClick(cat.name)}
              className={`${cat.theme} border rounded-[3rem] p-8 pt-10 text-center flex flex-col justify-between h-[360px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer group relative ${isActive ? 'ring-4 ring-offset-4 ring-primary' : ''}`}
            >
              <div>
                <h3 className="text-2xl font-black text-charcoal mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">{cat.items}</p>
              </div>
              <div className="w-full h-[200px] mt-6 flex items-end justify-center overflow-hidden relative">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 
                    ${isExternal ? 'contrast-[1.2] brightness-[1.05]' : 'contrast-[1.02] brightness-[1.0]'}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <LayoutGrid size={48} className="text-gray-300" />
                </div>
              </div>
              {isActive && (
                <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <X size={20} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;


import React from 'react';
import { ChevronRight, Star, Heart } from 'lucide-react';

const FeaturedProducts = ({ products, onAddToCart, selectedCategory }) => {
  return (
    <section id="products" className="py-8">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-charcoal">
            {selectedCategory ? `Fresh ${selectedCategory}` : "Featured Products"}
          </h2>
          <p className="text-gray-500 font-medium">
            {selectedCategory ? `Best quality ${selectedCategory.toLowerCase()} from local farms` : "Top picks for you this week"}
          </p>
        </div>
        {!selectedCategory && (
          <a href="#products" className="text-primary font-bold flex items-center gap-1 group hover:underline">
            View All <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        )}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          {products.map((prod, index) => (
            <div 
              key={prod.id} 
              className="bg-white rounded-[2.5rem] p-6 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/5] bg-gray-50 rounded-[2rem] mb-6 overflow-hidden relative">
                {prod.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg z-10 uppercase tracking-widest">
                    {prod.discount}
                  </span>
                )}
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-110" 
                />
                <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm text-gray-400 hover:text-red-500 hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                   <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{prod.category}</span>
                   <div className="flex gap-0.5 text-amber-400">
                     {[...Array(prod.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors h-[2.5rem]">{prod.name}</h3>
                
                <div className="flex justify-between items-center mt-auto pt-5 border-t border-gray-50">
                  <div className="flex flex-col">
                     <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Price</span>
                     <span className="text-xl font-black text-charcoal-dark">{prod.price}</span>
                  </div>
                  <button 
                    className="h-12 w-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-3xl font-bold hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm group/btn"
                    onClick={() => onAddToCart(prod)}
                  >
                    <span className="group-hover/btn:scale-125 transition-transform">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
          <p className="text-xl text-gray-400 font-medium">No products found in this category.</p>
          <button 
            onClick={() => onAddToCart()} // Just a placeholder for returning or something
            className="mt-4 text-primary font-bold hover:underline"
          >
            Go back to all products
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;


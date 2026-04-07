import React from 'react';
import { ArrowLeft, ShoppingCart, Star, Heart } from 'lucide-react';

const CategoryDetail = ({ category, products, onBack, onAddToCart }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Category Header */}
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-6 hover:translate-x-1 transition-transform group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Categories
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-3 uppercase tracking-wider">
              {category} Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight">
              Fresh {category}
            </h1>
            <p className="mt-4 text-gray-500 max-w-2xl text-lg font-medium leading-relaxed">
              Discover our carefully selected range of premium quality {category.toLowerCase()} from local sustainable farms. Delivered fresh to your doorstep within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <div className="bg-gray-50 px-4 py-3 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Products Found</p>
                <p className="text-2xl font-black text-charcoal">{products.length}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((prod) => (
            <div key={prod.id} className="bg-white rounded-[2.5rem] p-6 border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group relative">
              <div className="aspect-[4/5] bg-gray-50 rounded-[2rem] mb-6 overflow-hidden relative">
                {prod.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-black px-3 py-1.5 rounded-xl shadow-lg z-10 animate-bounce">
                    {prod.discount}
                  </span>
                )}
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" 
                />
                <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm text-gray-400 hover:text-red-500 hover:bg-white transition-all">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(prod.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">{prod.name}</h3>
                
                <div className="flex justify-between items-center mt-auto pt-5 border-t border-gray-50">
                  <div className="flex flex-col">
                     <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Per Unit</span>
                     <span className="text-2xl font-black text-charcoal-dark">{prod.price}</span>
                  </div>
                  <button 
                    className="h-12 w-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold hover:bg-primary hover:text-white transition-all active:scale-90 shadow-sm"
                    onClick={onAddToCart}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
           <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No products found</h3>
              <p className="text-gray-500 mb-8 font-medium">We're restocking this category. Please check back later!</p>
              <button 
                onClick={onBack}
                className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:shadow-lg transition-all"
              >
                Explore Other Categories
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;

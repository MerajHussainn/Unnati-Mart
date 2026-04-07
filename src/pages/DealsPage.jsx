import React from 'react';
import { ArrowLeft, ShoppingCart, Heart, Timer } from 'lucide-react';

const DealsPage = ({ products, onBack, onAddToCart }) => {
  // Only show deals related strictly to products that have a deal/discount
  const dealProducts = products.filter(p => p.isDeal || p.discount);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold mb-6 hover:translate-x-1 transition-transform group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
          <div>
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-bold mb-3 uppercase tracking-wider flex items-center gap-2 w-max">
              <Timer size={16} /> Exclusive Offers
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight">
              Today's Flash Deals
            </h1>
            <p className="mt-4 text-gray-500 max-w-2xl text-lg font-medium leading-relaxed">
              Grab these premium items before the clock runs out! Limited stock available for our best deals across all categories.
            </p>
          </div>
          <div className="flex items-center gap-3">
             <div className="bg-gray-50 px-4 py-3 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Active Deals</p>
                <p className="text-2xl font-black text-charcoal">{dealProducts.length}</p>
             </div>
          </div>
        </div>
      </div>

      {dealProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {dealProducts.map((prod) => (
            <div key={prod.id} className="bg-white rounded-[2.5rem] p-6 border-2 border-rose-50 hover:border-rose-100 hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)] transition-all duration-300 flex flex-col group relative">
              <div className="aspect-[4/5] bg-gray-50 rounded-[2rem] mb-6 overflow-hidden relative flex items-center justify-center p-4">
                <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg z-10 animate-pulse uppercase tracking-widest">
                  Save {prod.discount || '20%'}
                </span>
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
                />
                <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm text-gray-400 hover:text-rose-500 hover:bg-white transition-all">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">{prod.category}</span>
                <h3 className="text-xl font-bold text-charcoal mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">{prod.name}</h3>
                
                <div className="flex justify-between items-center mt-auto pt-5 border-t border-gray-50">
                  <div className="flex flex-col">
                     <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest line-through mb-1">Was ₹{parseInt(prod.price.slice(1)) + 40}</span>
                     <span className="text-2xl font-black text-rose-500">{prod.price}</span>
                  </div>
                  <button 
                    className="p-4 bg-charcoal text-white rounded-3xl hover:bg-primary transition-all active:scale-95 shadow-lg group/btn"
                    onClick={() => onAddToCart(prod)}
                  >
                    <ShoppingCart size={22} className="group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
           <h3 className="text-2xl font-bold text-gray-400 mb-2">No active deals right now</h3>
           <p className="text-gray-500">Check back later for exciting offers!</p>
        </div>
      )}
    </div>
  );
};

export default DealsPage;

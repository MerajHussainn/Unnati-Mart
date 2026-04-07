import React from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import logo from '../assets/logo/logo.webp';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="sticky top-0 w-full px-4 md:px-10 py-5 bg-white flex justify-between items-center z-[1000] shadow-sm gap-4 md:gap-8 border-b border-gray-100">
      <div className="flex items-center gap-3 cursor-pointer shrink-0">
        <img src={logo} alt="Unnati Mart" className="w-16 h-16 object-contain" />
        <span className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Unnati Mart
        </span>
      </div>

      <div className="flex-1 max-w-[600px] hidden md:flex items-center bg-gray-50 px-5 py-3 rounded-full gap-3 border-2 border-transparent focus-within:border-primary focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-all duration-300">
        <Search size={20} className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search for groceries, snacks..." 
          className="bg-transparent border-none outline-none w-full text-base font-medium text-gray-800 placeholder:text-gray-400"
          aria-label="Search" 
        />
      </div>

      <div className="flex gap-3 md:gap-5 items-center shrink-0">
        <button className="p-3 rounded-full hover:bg-gray-50 hover:text-primary transition-all duration-200 group" aria-label="User Profile">
          <User size={24} className="group-hover:scale-110 transition-transform" />
        </button>
        <button 
          className="p-3 rounded-full hover:bg-gray-50 hover:text-primary transition-all duration-200 relative group" 
          onClick={onCartClick} 
          aria-label="Shopping Cart"
        >
          <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

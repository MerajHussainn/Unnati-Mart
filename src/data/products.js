// Using a mix of local assets and high-quality Unsplash images for maximum variety and professional look
import prodBroccoli from '../assets/prod_broccoli.png';
import prodApples from '../assets/prod_apples.png';
import prodMilk from '../assets/prod_milk.png';
import prodRice from '../assets/prod_rice.png';

export const products = [
  // Vegetables
  { id: 1, name: 'Premium Organic Broccoli', price: '₹45', rating: 5, discount: '20% Off', img: prodBroccoli, category: 'Vegetables' },
  { id: 2, name: 'Fresh Green Spinach', price: '₹30', rating: 5, discount: '15% Off', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', category: 'Vegetables', isDeal: true },
  { id: 3, name: 'Local Sweet Carrots', price: '₹55', rating: 4, discount: null, img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80', category: 'Vegetables' },
  { id: 4, name: 'Organic Red Tomatoes', price: '₹40', rating: 5, discount: '10% Off', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80', category: 'Vegetables' },

  // Fruits
  { id: 9, name: 'Farm Fresh Red Apples', price: '₹120', rating: 4, discount: null, img: prodApples, category: 'Fruits' },
  { id: 10, name: 'Sweet Valencia Oranges', price: '₹90', rating: 4, discount: null, img: 'https://images.unsplash.com/photo-1582979512210-99b6a5a8d5a2?auto=format&fit=crop&w=800&q=80', category: 'Fruits', isDeal: true },
  { id: 11, name: 'Golden Bananas', price: '₹60', rating: 5, discount: '10% Off', img: 'https://images.unsplash.com/photo-1571771894821-ad996211fdf4?auto=format&fit=crop&w=800&q=80', category: 'Fruits' },
  { id: 12, name: 'Fresh Pomegranate', price: '₹140', rating: 4, discount: null, img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9caab5b?auto=format&fit=crop&w=800&q=80', category: 'Fruits' },

  // Pulses & Dal
  { id: 50, name: 'Premium Toor Dal', price: '₹145', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80', category: 'Pulses & Dal', isDeal: true },
  { id: 51, name: 'Organic Moong Dal', price: '₹130', rating: 4, discount: '5% Off', img: 'https://images.unsplash.com/photo-1603512803328-9366e045cb7a?auto=format&fit=crop&w=800&q=80', category: 'Pulses & Dal' },

  // Cooking Oils
  { id: 53, name: 'Pure Mustard Oil (1L)', price: '₹185', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80', category: 'Cooking Oils', isDeal: true },
  { id: 54, name: 'Organic Sunflower Oil', price: '₹165', rating: 4, discount: '10% Off', img: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=800&q=80', category: 'Cooking Oils' },
  { id: 55, name: 'Pure Desi Ghee (500g)', price: '₹340', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1589927946927-46603a743a6d?auto=format&fit=crop&w=800&q=80', category: 'Cooking Oils' },

  // Dairy & Eggs
  { id: 17, name: 'Pure Cow Milk (1L)', price: '₹65', rating: 5, discount: '10% Off', img: prodMilk, category: 'Dairy & Eggs' },
  { id: 18, name: 'Fresh Farm Brown Eggs', price: '₹75', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1582722872445-44ad5c78a1dd?auto=format&fit=crop&w=800&q=80', category: 'Dairy & Eggs', isDeal: true },
  
  // Cereals
  { id: 40, name: 'Premium Corn Flakes', price: '₹180', rating: 5, discount: '10% Off', img: 'https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?auto=format&fit=crop&w=800&q=80', category: 'Cereals' },
  { id: 41, name: 'Organic Fruit Muesli', price: '₹350', rating: 4, discount: null, img: 'https://images.unsplash.com/photo-1517712188159-52522951435c?auto=format&fit=crop&w=800&q=80', category: 'Cereals', isDeal: true },

  // Grains & Flour
  { id: 19, name: 'Long Grain Basmati Rice', price: '₹180', rating: 5, discount: null, img: prodRice, category: 'Grains & Flour' },
  { id: 56, name: 'Sona Masoori Rice (5kg)', price: '₹320', rating: 4, discount: '15% Off', img: 'https://images.unsplash.com/photo-1586201327693-866419e86b5e?auto=format&fit=crop&w=800&q=80', category: 'Grains & Flour' },

  // Spices
  { id: 30, name: 'Organic Turmeric Powder', price: '₹80', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', category: 'Spices' },
  { id: 57, name: 'Dhaniya Powder (Coriander)', price: '₹45', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1599940824399-b88871bd9705?auto=format&fit=crop&w=800&q=80', category: 'Spices', isDeal: true },
  { id: 58, name: 'Kashmiri Garam Masala', price: '₹60', rating: 5, discount: '10% Off', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80', category: 'Spices' },
  
  // Home & Hygiene
  { id: 59, name: 'Premium Herbal Soap (3pk)', price: '₹120', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=800&q=80', category: 'Home & Hygiene', isDeal: true },
  { id: 60, name: 'Antiseptic Hand Wash (250ml)', price: '₹85', rating: 4, discount: '15% Off', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', category: 'Home & Hygiene' },

  // Organic Snacks
  { id: 45, name: 'Roasted Foxnuts (Makhana)', price: '₹180', rating: 5, discount: null, img: 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=800&q=100', category: 'Organic Snacks' },
];

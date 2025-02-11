import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import ItemCard from '../components/ItemCard';
import FilterControls from '../components/FilterControls';
import { getItems, addItemToCart, removeItemFromCart } from '../services/api';
import { FaUser } from 'react-icons/fa';

const Home: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([]);
  const [items, setItems] = useState<{ id: number; name: string; price: number; category: string; imageUrl: string }[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: Infinity });
  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const handleAddToCart = async (id: number) => {
    try {
      const response = await addItemToCart(1, id); // Assuming userId is 1 for simplicity
      const item = items.find((item) => item.id === id);
      if (item) {
        setCartItems([...cartItems, item]);
      }
    } catch (error) {
      console.error('Error adding item to cart', error);
    }
  };

  const handleRemoveFromCart = async (id: number) => {
    try {
      const response = await removeItemFromCart(1, id); // Assuming cartId is 1 for simplicity
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing item from cart', error);
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: 0, max: Infinity });
    setSearchQuery('');
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesPrice = item.price >= priceRange.min && item.price <= priceRange.max;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div>
      <Header onCartClick={() => setCartOpen(true)} />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Welcome to the Art Store</h1>
          <button onClick={() => navigate('/settings')} className="text-xl">
            <FaUser />
          </button>
        </div>
        <FilterControls
          categories={['Painting', 'Sculpture', 'Photography']}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onResetFilters={handleResetFilters}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} {...item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} items={cartItems} onRemoveItem={handleRemoveFromCart} />
    </div>
  );
};

export default Home;
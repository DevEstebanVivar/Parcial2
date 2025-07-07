import { useState } from 'react';
import products from './data/products';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import './index.css';

const App = () => {
  const [category, setCategory] = useState("Todos");
  const categories = [...new Set(products.map(p => p.category))];
  const filtered = category === "Todos" ? products : products.filter(p => p.category === category);

  return (
    <div className="container">
      <h1>Catálogo de Videojuegos</h1>
      <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default App;

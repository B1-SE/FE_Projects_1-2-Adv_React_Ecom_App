import { useState } from 'react';
import { useProducts, useCategories } from '../api';
import ProductCard from '../components/ProductCard';
import CategorySelect from '../components/CategorySelect'; // Assuming CategorySelect is in this path

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data: products, isLoading, error } = useProducts(selectedCategory);
  const { data: categories } = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <CategorySelect
        categories={categories || []} // Provide a default empty array if categories is undefined
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory} // <-- Corrected prop name
      />
      {products?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
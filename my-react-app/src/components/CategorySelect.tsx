import type { ChangeEvent } from 'react';

interface CategorySelectProps {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategorySelect = ({ 
  categories, 
  selectedCategory, 
  onChange 
}: CategorySelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleChange}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
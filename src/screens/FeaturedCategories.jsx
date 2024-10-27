import React, { useState, useEffect } from 'react';
import FeaturedCard from '../components/FeaturedCard';

const FeaturedCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const uniqueCategories = Array.from(new Set(data.map(item => item.category)))
        .map(category => data.find(item => item.category === category));

      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch categories on component mount
  }, []);

  return (
    <div className="flex justify-around overflow-x-auto no-scrollbar py-4 mx-10">
      {categories.map((data) => (
        <FeaturedCard key={data.id} category={data.category} />
      ))}
    </div>
  );
};

export default FeaturedCategories;

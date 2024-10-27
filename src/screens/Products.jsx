import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.in/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.products.splice(0, 15)));
  };

  useEffect(() => {
    console.log(products);
    fetchProducts();
  }, []);

  return (
    <div className="block">
      <h1 className="text-xl md:text-2xl font-bold ml-10 md:ml-16">
        Featured Products
      </h1>
      
      <div className="flex justify-center items-center flex-wrap gap-7">
        {products &&
          products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
      
      <div className="flex justify-center m-8">
        <button className="bg-[#3A3A3A] text-white font-bold px-4 py-2 rounded">
          See All
        </button>
      </div>
    </div>
  );
};

export default Products;

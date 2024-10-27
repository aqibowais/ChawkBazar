import React from 'react';
import { Card } from 'antd';

const ProductCard = ({ product }) => (
  <>
    <style>
      {`
        .hover-card {
          transition: all 0.3s ease;
        }
        
        .hover-card:hover {
          transform: translateY(-15px);
        }
      `}
    </style>

    <Card
      hoverable
      className="hover-card"
      style={{ width: 240 }}
      cover={<img src={product.image} alt={product.model} />}
    >
      <h3>{product.brand.toUpperCase() + ' ' + product.model}</h3>
    </Card>
  </>
);

export default ProductCard;

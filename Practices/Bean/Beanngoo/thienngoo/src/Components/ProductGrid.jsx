import React from "react";
import { data } from "../../data";

const ProductCard = ({ thumbnail, title, price, category }) => {
  return (
    <div className="shadow-lg">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          className="h-[200px] w-full object-cover hover:scale-110"
          src={thumbnail}
          alt="Shoes"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 px-3 pt-3 pb-1.5">
        <h5>{title}</h5>
        <div className="flex items-center justify-between">
          <p>${price}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
      {products.map((item, index) => {
        return (
          <ProductCard
            key={index}
            thumbnail={item.thumbnail}
            title={item.title}
            price={item.price}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;

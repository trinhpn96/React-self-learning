import React from "react";
import { categoryOptions, priceOptions } from "../../data";

const ProductFilter = ({ choice, setChoice }) => {
  const handleChoice = (e) => setChoice(e.target.value);

  const handleCategory = (e) => {
    const newChoice = { ...choice, filterCategory: e.target.value };
    setChoice(newChoice);
  };

  const handlePrice = (e) => {
    if (e.target.checked && !choice.filterPrice.includes(e.target.value)) {
      const newFilterPrice = [...choice.filterPrice, e.target.value];
      const newChoice = { ...choice, filterPrice: newFilterPrice };
      setChoice(newChoice);
    }
    if (!e.target.checked && choice.filterPrice.includes(e.target.value)) {
      const newFilterPrice = choice.filterPrice.filter(
        (item) => item != e.target.value
      );
      setChoice({ ...choice, filterPrice: newFilterPrice });
    }
  };

  return (
    <div>
      <div>
        {/* //////// */}
        <select
          defaultValue={"all"}
          className="select select-bordered w-full max-w-xs"
          onChange={handleCategory}
        >
          <option value="all">All</option>
          {categoryOptions.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        {/* ///////// */}
        <div>
          {priceOptions.map((item) => {
            return (
              <div key={item.value}>
                <input
                  id={item.value}
                  type="checkbox"
                  value={item.value}
                  onChange={handlePrice}
                />
                <label htmlFor={item.value}>{item.label}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

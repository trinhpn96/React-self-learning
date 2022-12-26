import React, { useEffect, useState } from "react";
import { data, priceOptValue } from "../data";
import ProductFilter from "./Components/ProductFilter";
import ProductGrid from "./Components/ProductGrid";

const App = () => {
  const [choice, setChoice] = useState({
    filterCategory: "all",
    filterPrice: [],
  });

  const [products, setProducts] = useState(data.products);
  useEffect(() => {
    const fProducts = data.products.filter((item) => {
      const checkCategory =
        choice.filterCategory === "all" ||
        item.category === choice.filterCategory;
      let checkPrice = true;
      if (choice.filterPrice.length >= 1) {
        checkPrice = false;
        for (let i = 0; i < choice.filterPrice.length; i++) {
          const filterValue = choice.filterPrice[i];
          switch (filterValue) {
            case "lt200":
              checkPrice = checkPrice || item.price <= 200;
              break;
            case "lt500":
              checkPrice =
                checkPrice || (item.price > 200 && item.price <= 500);
              break;
            case "gt500":
              checkPrice = checkPrice || item.price > 500;
              break;
          }
        }
      }
      return checkCategory && checkPrice;
    });
    setProducts(fProducts);
  }, [choice]);

  return (
    <div className=" max-w-screen-xl mx-4 my-8">
      <div className=" px-3 py-6">
        <ProductFilter setChoice={setChoice} choice={choice} />
      </div>
      <div className=" px-3 py-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default App;

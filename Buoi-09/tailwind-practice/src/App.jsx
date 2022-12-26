import Card from "./components/Card";
import BeanCard from "./components/BeanCard";
import CardSample from "./components/CardSample";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import NavbarSample from "./components/NavbarSample";

const App = () => {
  const [listShoes, setListShoes] = useState([]);

  useEffect(() => {
    console.log("modify listshoes", listShoes);
  }, [listShoes]);

  useEffect(() => {
    const ls = [];
    for (let i = 0; i < 10; i++) {
      ls.push({
        shoesName: `Adidas ${i}`,
        price: Math.floor(Math.random() * 1000),
        variarions: `${Math.floor(Math.random() * 10)} colors`,
      });
    }
    setListShoes(ls);
  }, []);

  const addShoes = () => {
    const ls = [...listShoes];
    ls.push({
      shoesName: `Adidas ${1000}`,
      price: Math.floor(Math.random() * 1000),
      variarions: `${Math.floor(Math.random() * 10)} colors`,
    });
    setListShoes(ls);
  };

  return (
    <div className="h-[300vh] bg-white">
      <NavbarSample />
      <hr />
      <Navbar />
      <hr />
      <CardSample />
      <hr />
      <Card />

      <hr />
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-3 md:gap-x-4 lg:gap-x-5">
          {listShoes.map((s, i) => (
            <BeanCard
              key={i}
              shoesName={s.shoesName}
              price={s.price}
              variarions={s.variarions}
            />
          ))}
        </div>
        <button onClick={addShoes}>Add Shoes</button>
      </div>
    </div>
  );
};

export default App;

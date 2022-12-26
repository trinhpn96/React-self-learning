import { useState } from "react";
const BeansCart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (itemName) => {
    const item = {
      itemName: itemName,
      quantity: 1,
    };
    setCart([...cart, item]);
  };

  const handleIncrease = (item, index) => {
    const newCart = cart.map((citem, cindex) => {
      if (cindex === index) {
        citem.quantity++;
      }
      return citem;
    });

    setCart(newCart);
  };

  const handleDecrease = (item, index) => {
    const arr = cart.map((newItem, newIndex) => {
      if (newIndex === index) {
        newItem.quantity--;
      }
      return newItem;
    });
    setCart(arr);
  };

  return (
    <div>
      <button
        className="bg-purple-500 px-2 mx-5"
        onClick={() => addItem("Dress")}
      >
        Add Dress
      </button>
      <button
        className="bg-pink-500 px-2 mx-5"
        onClick={() => addItem("Lipstick")}
      >
        Add Lipstick
      </button>
      <button className="bg-red-500 px-2 mx-5" onClick={() => addItem("Manga")}>
        Add Manga
      </button>

      {/* render cart UI */}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {`${item.itemName} - ${item.quantity}`}{" "}
            <button
              className="bg-neutral-300 px-2 mx-1"
              onClick={() => {
                handleIncrease(item, index);
              }}
            >
              +
            </button>
            <button
              className={`${item.quantity <=1? "bg-neutral-300" : "bg-purple-300"} px-2 mx-1`}
              onClick={() => {
                handleDecrease(item, index);
              }}
              disabled={item.quantity <= 1}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeansCart;

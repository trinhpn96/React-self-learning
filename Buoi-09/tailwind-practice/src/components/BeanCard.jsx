import { useState, useEffect } from "react";

const BeanCard = ({ shoesName, price, variarions }) => {
  //   const [data, setData] = useState({});

  useEffect(() => {
    console.log(shoesName, price, variarions);
  }, []);

  return (
    <div>
      <div className="overflow-hidden">
        <img
          className="w-full h-[450px] object-cover hover:scale-110"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="Shoes"
        />
      </div>

      <div className="flex flex-col">
        <div className="py-3">{shoesName}</div>
        <div className="flex flow-row justify-between">
          <div>{price}$</div>
          <div>{variarions}</div>
        </div>
      </div>
    </div>
  );
};

export default BeanCard;

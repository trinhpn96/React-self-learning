import React from "react";
import { useState } from "react";

const Card = ({ title, description, price, quantity = 0, tags }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}$</p>
      {quantity === 0 ? <p>Sold out</p> : <p>Quantity: {quantity} </p>}
      <ul className="text-red-500">
        {tags?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={"flex items-center gap-4"}>
      <button
        onClick={decrement}
        className={`p-2 bg-slate-100 border border-black rounded ${
          quantity <= 0 && "opacity-20"
        }`}
        disabled={quantity === 0}
      >
        -
      </button>

      <span> {quantity} </span>
      <button
        onClick={increment}
        className="p-2 bg-slate-100 border border-black rounded"
      >
        +
      </button>
    </div>
  );
};

const QA = [
  { id: 1, question: "Are u single?", answer: "Guess?" },
  { id: 2, question: "Are u happy now?", answer: "Hope so." },
  {
    id: 3,
    question: "Are u believe that u can find a new job?",
    answer: "Totally yes. I would be a FE Dev!!!",
  },
];

const Toggler = ({ question, answer }) => {
  //State: open/close -> isOpen (initialValue:true)
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" px-4 py-2 rounded bg-blue-500 text-white"
      >
        {question}
      </button>

      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const Input = () => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleText}
        className="border border-black"
        type="text"
      />
      <p>Text:{text}</p>
    </div>
  );
};

const categoryOptions = [
  {
    value: "shoes",
    label: "Shoes",
  },
  {
    value: "shirt",
    label: "Shirts",
  },
  {
    value: "pant",
    label: "Pant",
  },
];

const Select = ({ options }) => {
  const [option, setOption] = useState(options[0].value);

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const filterdOption = options.find((item) => {
    return item.value === option;
  });

  return (
    <div>
      <select className="border border-black" onChange={handleOption}>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <p>{filterdOption.label}</p>
    </div>
  );
};

const sizeOptions = [
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large" },
];

const RadioButtons = ({ options, name }) => {
  const [option, setOption] = useState(options[0].value);

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <div>
        {options.map((item) => {
          return (
            <div>
              <input
                type="radio"
                name={name}
                value={item.value}
                onChange={handleOption}
                checked={option === item.value}
              />
              <label>{item.label}</label>
            </div>
          );
        })}
      </div>

      <p>{option}</p>
    </div>
  );
};

const CheckBoxes = () => {
  //add state
  const [choices, setChoices] = useState([]);

  const handleChoices = (e) => {
    if (e.target.checked) {
      //Case 1: add checked items in the arr
      setChoices([...choices, e.target.value]);
    } else {
      //Case 2: remove unchecked items
      // -> return new arr wt filtered items except target item
      const filterChoices = choices.filter((item) => item !== e.target.value);
      setChoices(filterChoices);
    }
  };

  return (
    <div>
      <div>
        {/* Checkboxes */}
        <div>
          <input type="checkbox" value="shoes" onChange={handleChoices} />
          <label>Shoes</label>
        </div>
        <div>
          <input type="checkbox" value="shirt" onChange={handleChoices} />
          <label>Shirt</label>
        </div>
        <div>
          <input type="checkbox" value="pant" onChange={handleChoices} />
          <label>Pant</label>
        </div>
        {/* <div>{choices}</div> */}
      </div>
      {/* Results */}
      <div>
        {choices.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </div>
  );
};
export default function App() {
  return (
    <div>
      <Select options={categoryOptions} />
      <Select options={sizeOptions} />
      <RadioButtons options={categoryOptions} name="clothes" />
      <RadioButtons options={sizeOptions} name="size" />
      <hr />
      <CheckBoxes />
    </div>
  );
}

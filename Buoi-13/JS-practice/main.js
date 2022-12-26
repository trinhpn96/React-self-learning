//map
//callback hell
setTimeout(() => {
  console.log("Giat do");
}, 2000);

//promise way / async way
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data.products));

//sync way/ using async & await
const fetchData = async () => {
  try {
    //-> add async to notice that an async function
    const response = await fetch("https://dummyjson.com/products");
    //-> add await to notice that an async function must be done 1st and wait for it
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//destructuring

const myName = ["V", "A", "N", "I"];
const [x, y, z, o] = myName;

//spread operater
const friends = ["A", "B", "C"];
const enemies = ["D", "E", "F"];
 const all = [...friends, ...enemies];// or friends.concat(enemies)
 console.log(all)


 //Optional chaining
 
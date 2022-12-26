// Steps:
// 1. Variable declaration : (create HTML Elements, get elms in JS);
// 2. Add event
// 3. Call function
// 4. Update UI

let button = document.querySelector("#button");
let numb = document.querySelector("#numb");
let count = 0;

button.addEventListener("click", increaseNumb);
function increaseNumb(event) {
  count += 1;
  numb.textContent = count;
}

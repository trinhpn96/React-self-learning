// function Title() {
//   return (
//     <h1
//       id="title"
//       style={{ color: "red" }}
//       onMouseEnter={() => {
//         console.log("Mouse Enter");
//       }}
//     >
//       Total Click: 0
//     </h1>
//   );
// }

// const Button = () => (
//   <button
//     id="btn"
//     style={{ backgroundColor: "tomato" }}
//     onClick={() => {
//       console.log("Click!");
//     }}
//   >
//     Click
//   </button>
// );

// // create Component
// function Container() {
//   return (
//     <div>
//       <Title />
//       <Button />
//     </div>
//   );
// }

// let herb = ['mint', 'applerose'];
// let [myFavHerb , myWorstHerb] = herb;
// //Result:
// myFavHerb = 'mint';
// myWorstHerb = 'applerose';

// function timeConversion(s) {
//   function addZero(num) {
//     return num < 10 ? "0" + num : num;
//   }
//   let arr = s.match(/\d+/g).map(Number);
//   if (s.includes("AM")) {
//     if (arr[0] === 12) {
//       return `${addZero(arr[0] - 12)}:${addZero(arr[1])}:${addZero(arr[2])}`;
//     } else {
//       return `${addZero(arr[0])}:${addZero(arr[1])}:${addZero(arr[2])}`;
//     }
//   } else {
//     if (arr[0] === 12) {
//       return `${addZero(arr[0])}:${addZero(arr[1])}:${addZero(arr[2])}`;
//     } else {
//       return `${arr[0] + 12}:${addZero(arr[1])}:${addZero(arr[2])}`;
//     }
//   }
// }

function gradingStudents(grades) {
  // Write your code here
  let result = [];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < 40) {
      if (grades[i] < 38) {
         grades[i] = grades[i];
      } else {
        (grades[i] = 40);
      }
    } else if (grades[i] <= 100) {
      // if (grades[i] % 5 == 0) {
      //     return grades[i];
      if (5 - (grades[i] % 5) < 3) {
        grades[i] += (5 - (grades[i] % 5));
      } else {
        grades[i] = grades[i];
      }
    }
    result.push(grades[i]);
  }

}

gradingStudents([73, 67, 38, 33]);

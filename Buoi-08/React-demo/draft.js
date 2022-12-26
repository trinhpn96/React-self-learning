function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
let posA = apples.map((p) => p + a);
let posB = oranges.map((p) => p + b);    
let resA = 0; 
  let resB = 0; 

for (let i = 0; i < posA.length; i++)  {
if (s <= posA[i] <= t) {
  resA++;
} else {
  resA;
}
    } return resA;
}
for (let i = 0; i < posB.length; i++) {
  if (s <= posB[i] <= t) {
  resB++;
} else {
  resB;
}
    } return resB;
//   }
// console.log(resA, resB);  
// }


countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3, -2, -4]);
// 문제 1
// 1-1. 
function getMean(data) {
  const average = data.reduce((a,b)=>a+b) / data.length;
  return average;
}


// test 
const data = [89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25, 67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01];
console.log(getMean(data));
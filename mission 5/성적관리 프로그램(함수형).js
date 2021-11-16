// 문제 1
// 1-1. 
function getMean(data) {
  const average = data.reduce((a,b)=>a+b) / data.length;
  return average;
}

function getVariance(data) { // 표준편차를 위한 분산
  const average = getMean(data);
  const value = data.map(e =>Math.pow(e - average, 2));
  const variance = value.reduce((a,b) => a+b) / data.length;
  return variance;
}


// 1-2.
function getStandardDeviation() {
  const variance = getVariance(data);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

// 1-3 .


// test 
const data = [89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25, 67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01];
console.log(getMean(data));
console.log(getVariance(data));
console.log(getStandardDeviation());



// 문제 2

// 사용자에게 과목별 점수를 입력받는다.
// node.js 비동기 방식으로 사용자 입력을 받는다.
// 과목별로 결과가 나오도록 구현 
// 퀵소트를 사용해서 과목별 점수를 정렬하는 기능 추가

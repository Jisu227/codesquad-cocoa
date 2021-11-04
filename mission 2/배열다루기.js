// 1. factorial 함수 
// - 재귀함수 : 함수가 자신을 다시 호출하는 구조로 만들어진 함수이다. 하지만 나는 재귀로 풀지 않았다..ㅎㅎ!

function calculate(m) {
  let result = [];
  let num = 1;
  for(let i = 1; i <= m; i++) {
    num = num * i
    result.push(num);
  }
  return result;
}


// test

console.log(calculate(4));
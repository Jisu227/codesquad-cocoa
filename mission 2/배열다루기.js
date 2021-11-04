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

// 3. 평균구하기

function calcGrades(grades) {
  let result = '';
  let sum = 0;
  for(let i = 0; i < grades.length; i++) { // 각 학생의 평균점수구하고 출력하기
    sum = grades[i].reduce((a,b) => a + b) / grades[i].length;
    result += `${i+1}번째 학생의 평균점수는 ${sum.toFixed(2)} 입니다. \n`;
  }
  return result;
}

// test

console.log(calculate(4));

const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
console.log(calcGrades(grades))
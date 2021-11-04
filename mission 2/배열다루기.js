// 1. factorial 함수 
// - 재귀함수 : 함수가 자신을 다시 호출하는 구조로 만들어진 함수이다.

function calculate(m) {
  let result = [];
  let num = 1;
  for(let i = 1; i <= m; i++) {
    num = num * i
    result.push(num);
  }
  return result;
}

// 2. 배열거르기 
// (1) 특수기호가 있는 아이디 제외
// (2) 아이디에서 숫자를 제거
// (3) for / while 문 사용 버전

function filterId(peoples) {
  let result = [];
  const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/g;
  for(let i = 0; i < peoples.length; i++) {
    if(!regExp.test(peoples[i])) { // test(), match() 공부하기 
      result.push(peoples[i].replace(/[0-9]/g,'')); // replace() 함수 정리하기
    }
  }
  return result;
} 



// 3. 평균구하기

function calcGrades(grades) {
  let result = '';
  let sum = 0;
  let maxGrades = [];
  let maxGrade = 0;
  let highScore = 0;
  
  for(let i = 0; i < grades.length; i++) { // 각 학생의 평균점수구하고 출력하기
    sum = grades[i].reduce((a,b) => a + b) / grades[i].length;
    result += `${i+1}번째 학생의 평균점수는 ${sum.toFixed(2)} 입니다. \n`;
  }

  for(let i = 0; i < grades.length; i++) { // 모든 학생의 최고점수를 구하여 maxGrade 배열에 push 하여 준다.
    maxGrade = 0;
    for(let j = 0; j < grades[i].length; j++) {
      if(grades[i][j] > maxGrade) {
        maxGrade = grades[i][j];
      }
    }
    maxGrades.push(maxGrade);
  };

  highScore = maxGrades.reduce((a,b)=> a + b) / maxGrades.length; // 최고점수들의 평균을 구하여 준다.
  result += `모든 학생의 최고점수의 평균점수는 ${highScore} 입니다.`;
  return result;
}  

// test

console.log(calculate(4));

const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
console.log(calcGrades(grades))

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
console.log(filterId(peoples));
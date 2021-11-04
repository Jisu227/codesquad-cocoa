
function solution (binary, endNum, people) {
  let result = '';
  let numbers = [];
  for(let i = 0; i < endNum * people; i++) {
    numbers.push(i);
    result += numbers[i].toString(binary);
  }
  return result.split('');
}

// test
console.log(solution(2,4,2));
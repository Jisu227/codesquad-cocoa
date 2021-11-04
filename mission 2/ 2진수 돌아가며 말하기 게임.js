
function convertNotation (binary, endNum, people) {
  let result = '';
  let numbers = [];
  for(let i = 0; i < endNum * people; i++) {
    numbers.push(i);
    result += numbers[i].toString(binary);
  }
  return result.split('');
}

// 2진수 뿐 아니라 16진수까지 동작하는 프로그램을 만든다.
// 파라미터로 진법 binary, 미리 구할 숫자의 갯수 number, 게임에 참가하는 인원 people, 길동이의 순서 order가 주어진다

function findGildongTurn(binary, number, people, order) { // 길동이의 순서가 2번째라면 
  let gildongSaid = '';
  let result = '';
  let numbers = [];
  for(let i = 0; i < number * people; i++) {
    numbers.push(i);
    result += numbers[i].toString(binary);
  }
  result = result.split('');
  gildongSaid = result[order-1];
  return gildongSaid;
}

// test
console.log(convertNotation(2,4,2));

console.log(findGildongTurn(2, 3, 2, 2));
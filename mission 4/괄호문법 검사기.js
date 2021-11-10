// 배열모양의 문자열을 파싱하는 미션이다.
// 모든 숫자는 배열의 모양에 따라 괄호('[ ]')에 의해서 감싸져 있다.
// 괄호는 중첩되서 표현되며 무한대로 될 수 있다.
// 무한한 형태를 파싱하는 것이 처음부터 어려울 수 있다. 따라서 아래와 같이 유한한 형태로 중첩된 배열을 파싱하는 것을 먼저 시도해보는 것도 좋다.

// 1. 요구사항 : 객체 분석 정보를 출력
// 배열의 중첩된 깊이를 분석한다.

function saveDepth(data) {
  let stack = [];
  let openCount = 0;
  let closeCount = 0;
  const splitData = data.split('');

  for(let i = 0; i < splitData.length; i++) {
    if(splitData[i] === '[') {
      stack.push(splitData[i]);
      openCount += 1;
    } else if(splitData[i] === ']') {
      stack.pop();
      closeCount += 1;
    } else {
      continue;
    }
  }
  if(openCount === closeCount) { // 2. 요구사항 : 괄호의 갯수가 제대로인지 파악한다. 
    return openCount;
  } else {
    return '닫는 괄호가 일치하지 않습니다.';
  }
}


// test
const data = "[1,2,[3,4,[5,[6]]]]";
console.log(saveDepth(data));



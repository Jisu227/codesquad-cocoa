// 1. getArea() 메서드를 구현해보자.

let executionResult = [];
let executionOrder = [];

function getArea(shape) {
  if(shape === 'circle') {
    console.log(calcCircle(arguments[1],arguments[2]));
    executionOrder.push('calcCircle');
    executionResult.push(calcCircle(arguments[1],arguments[2]));

  } else if(shape === 'ract') {
    console.log(calcRactangle(arguments[1],arguments[2]));
    executionOrder.push('calcRactangle');
    executionResult.push(calcRactangle(arguments[1],arguments[2]));

  } else if(shape === 'trapezoid') {
    console.log(calcTrapezoid(arguments[1],arguments[2],arguments[3]));
    executionOrder.push('calcTrapezoid');
    executionResult.push(calcTrapezoid(arguments[1],arguments[2],arguments[3]));
  }
}

function calcCircle(radius, n = 0) {
  if(n === 0) {
    return radius * radius * 3.14;
  } else {
    let startNum = radius;
    let sum = 0;
    for(let i = startNum; i <= n; i++) {
      sum += i * i * 3.14;
    }
    return sum;
  }
}

function calcRactangle(width, height) {
  return width * height;
}

function calcTrapezoid(upperSide, lowerSide, height) {
  return (upperSide + lowerSide) * height;
}

// test

getArea('circle',10);
getArea('ract',10,15);
getArea('trapezoid',10,15,12);
getArea('circle',1,3);


// 2.  printExecutionSequence 함수만들기

function printExecutionSequence() {
  console.log(executionOrder.join());
}

printExecutionSequence();

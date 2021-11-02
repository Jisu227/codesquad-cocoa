// 1. getArea() 메서드를 구현해보자.

function getArea(shape) {
  let executionResult = [];
  let executionOrder = [];
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



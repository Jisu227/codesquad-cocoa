// 1. getArea() 메서드를 구현해보자.

function getArea(shape) {
  if(shape === 'circle') {
    console.log('원의 넓이는 '+calcCircle(10)+' 입니다.');
  }else if(shape === 'ract') {
    console.log('사각형의 넓이는 '+calcRact(10,15)+' 입니다.');
  }else if(shape === 'trapezoid') {
    console.log('사다리꼴의 넓이는 '+calcTrapezoid(10,15,12)+ ' 입니다.');
  }else if(shape === 'sumCircle') {
    console.log('모든 원의 넓이의 합은 '+ sumOfAllCircle(1,10) + ' 입니다.');
  }
}

let shape = ['circle','ract','trapezoid','sumCircle'];
for(let i = 0; i < shape.length; i++) {
  getArea(shape[i]);
}


function calcCircle(radius) {
  const area = radius * radius * 3.14;
  return area;
}

function calcRact(width,height) {
  const area = width * height;
  return area;
}

function calcTrapezoid(upperSide,lowerSide,height) {
  const area = (upperSide + lowerSide) * height;
  return area;
}

function sumOfAllCircle(startRadius, endRadius) {
  let area = 0;
  for(let i = startRadius; i <= endRadius; i++) {
    area += (i * i) * 3.14;
  }
  return area;
}


// 2. printExecutionSequence 함수만들기.


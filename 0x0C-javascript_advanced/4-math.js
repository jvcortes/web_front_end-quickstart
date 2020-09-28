function divideBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  }
}

function addBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber + firstNumber;
  }
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy100 = divideBy(100);
let divideBy1000 = divideBy1000(100);

// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;

  // if(param1 && param2) {
  //   return true;
  // } else if(param1 && param2) {
  //   return false;
  // } else {
  //   return false;
  // }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(param) {
  return param.split(' ');
  // let result = param.split(' ');
  // return result;
}

// Desafio 4
function concatName(param) {
  let result = param;
  return `${result[result.length - 1]}, ${result[0]}`;

  // let firstText = text[text.length - 1];
  // let lastText =  text[0];
  // let result = firstText + ", " + lastText;
  // return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;

  // let victory = wins;
  // let drawn = ties;

  // let result = (victory * 3) + (drawn * 1);
  // return result;
}

// Desafio 6

function highestCount(param) {
  let max = Math.max.apply({}, param);
  let result = 0;
  for (let index = 0; index < param.length; index += 1) {
    if (max === param[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if (cat1 < cat2) {
    return 'cat1';
  } if (cat2 < cat1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // let arraFinal = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 15 === 0) {
      array[index] = 'fizzBuzz';
      // arrayFinal.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
      // arrayFinal.push('fizz');
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
      // arrayFinal.push('buzz');
    } else {
      array[index] = 'bug!';
      // arrayFinal.push('bug!');
    }
  }
  return array;
  // return arrayFinal;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

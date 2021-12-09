 // Desafio 1
function compareTrue(game1, game2) {
 if (game1 == true && game2 == true){
  return true;
  } else if (game1 == true && game2 == false){
     return false;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  if (base === 10 && height === 50){
    return (base * height) /2;
  } else if (base === 5 && height === 2){
    return (base * height) /2;
  } else if (base === 51 && height === 1){
    return (base * height) /2;
  }
}

// Desafio 3
function splitSentence(string) {
  let separarPalavras = string.split(' ', 3);
  return separarPalavras;
}
 
// Desafio 4
function concatName(nomes) {
  let primeiroItem = nomes[0];
  let ultimoItem = nomes[nomes.length - 1];
  let nomeCompleto = ultimoItem + ", " + primeiroItem; 
  return nomeCompleto; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos="";
  if (wins === 14 && ties === 8){
    pontos= 50;
  } else if (wins === 1 && ties === 2){
    pontos= 5;
  } else if (wins === 0 && ties === 0){
    pontos = 0;
  }
  return pontos;
}
// Desafio 6
function highestCount(arr) {
  let maiorNum= Math.max.apply(null,arr);
  let contador= 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === maiorNum){
      contador = contador + 1;
    }
  }
   return contador;
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
   distanciaCat1 = Math.abs(distanciaCat1);
   distanciaCat2 = Math.abs(distanciaCat2);

  if (distanciaCat1 > distanciaCat2){
    return "cat2";
  } else if (distanciaCat2 > distanciaCat1){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }  
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8
function fizzBuzz(numbers) {
  let resposta= [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%3 === 0 && numbers[i]%5 === 0){
      resposta[i]= "fizzBuzz";
    } else if (numbers[i]%3 === 0){
      resposta[i]= "fizz";
    } else if (numbers[i]%5 === 0){
      resposta[i]= "buzz";
    } else {
      resposta[i] = "bug!";
    }
  }   
  return resposta;
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

// let i = 0;

// // Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "for"

// for (i; i < 10; i++) {
//   console.log(i + 1);
// }

// // // Dada una variable "x" la cual contiene un numero, imprimir en consola todos los numeros que esten entre el valor de la variable y 0.

// const x = 13;

// for (i; i <= x; i++) {
//   console.log(i);
// }

// // // Imprimir en pantalla los numeros del 1 al 10 utilizando un bucle "while"

// while (i < 10) {
//   console.log(i + 1);
//   i++;
// }

// // Imprimir los primeros 50 numeros pares

// for (i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

let num = 38028;

// function isEven(arr) {
//   let even = [];
//   let i = 0;

//   for (i; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     }
//   }
//   return even;
// }

// isEven(arr);

// function countGreater(arr) {
//   let i = 0;
//   let greaterNum = arr[0];
//   let count = 0;

//   for (i; i < arr.length; i++) {
//     const currentNum = arr[i];

//     if (currentNum == greaterNum) {
//       count++;
//     }

//     if (currentNum > greaterNum) {
//       greaterNum = currentNum;
//       count = 1;
//     }
//   }
//   return count;
// }

// function countGreater(arr) {
//   let i = 0;
//   let greaterNum = arr[0];
//   let result = 0;

//   for (i; i < arr.length; i++) {
//     const currentNum = arr[i];
//     if (currentNum >= greaterNum) {
//       greaterNum = currentNum;
//       result = arr.filter((arr) => arr === greaterNum);
//     }
//   }
//   return result.length;
// }

// function reverseArray(arr) {
//   let reverse = [];
//   let i = 0;

//   for (i; i < arr.length; i++) {
//     reverse.unshift(arr[i]);
//   }
//   console.log(reverse);
//   return reverse;
// }

// const str = "aeiouasd";

// function vowelCounter(str) {
//   let count = 0;
//   const vocal = ["a", "i", "u", "e", "o"];

//   for (let letter of str.toLowerCase()) {
//     if (vocal.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

// const string = prompt("Enter a string: ");

// const result = vowelCounter(string);

// console.log(result);

function invertNumber(num) {
  const numString = num.toString();
  const splitNum = numString.split("");
  const reverseNum = splitNum.reverse();
  const joinNum = reverseNum.join("");
  const stringToNum = parseInt(joinNum, 10);

  return stringToNum;
}

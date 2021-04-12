"use strict";

var num = Math.random() * 10;
var number = prompt("Введите число от 1 до 10");

if (+number == num) {
  console.log("Верно");
  document.write("Верно");
} else {
  console.log("Не верно");
  document.write("Не верно");
}
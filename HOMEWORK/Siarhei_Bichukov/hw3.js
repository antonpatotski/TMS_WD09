"user strict";

export function hW3(){
  // Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
  //
  // > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
  function getSum(a) {
    let j=0;
    for (let i=1; i<=a; i++) {
      j += i
    }
    console.log(j);
  }
  // getSum(prompt("Введите число"));
// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент
  // и верните результат переплаты по кредиту:
  //
  //     + процентная ставка в год — 17%,
  //     + количество лет — 5.
  function Task2(a){
    let j=a;
    for (let i=1; i<=5; i++) {
      j=j*1.17;
    }
    console.log(j-a);
  }
  // Task2(prompt("Введите сумму "));

  //Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
  // + строку
  // + значение от
  // + значение по
  //
  // После вызова функция должна вернуть переданную строку обрезанную по значениям от и по
  function Task3(){
    const a = prompt("Введите строку ");
    const b = prompt("Введите значение от ");
    const c = prompt("Введите значение по ");

    console.log(a.slice(b, c));
  }
  // Task3();
  //Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
  function getSumNumbers(){
    let y = prompt("Введите число ");
    let sum = 0, x = String(y);
    for (let i = 0; i < x.length; i++) {
      sum += Number(x[i]);
    }
    console.log(sum);
  }
  // getSumNumbers();
  //Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или
  //отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
  function Task5(){
    let a = +prompt("Введите число a");
    let b = +prompt("Введите число b");
    let sum = 0;
    if (a===b){
      console.log(`a=b и их значение ${a}`)
    } else if (a>b){
      for (let i = b; i < a+1; i++) {
        sum += i
      }
      console.log(sum);
    } else {
      for (let i = a; i < b+1; i++) {
        sum += i
      }
    }
  }

  // Task5();
  //Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
  //
  // + булевое значение
  // + функцию **foo** которая выводит в консоль свое имя
  // + функцию **boo** которая выводит в консоль свое имя
  //
  // > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

  const foo = function (){
    console.log("foo");
  }
  const boo = function () {
    console.log("boo");
  }
  function fooboo(isActive, foo, boo){
    isActive ? foo() : boo();
  }
  // fooboo(true, foo,boo);
  //+ Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
  // Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины,
  // и **false** в любом другом случае.
  function adTask1(a,b,c){

    if  ((a + b > c) && (a + c > b) && (b + c > a)){
      console.log('true');
    }else {   console.log('false');}
  }
  // adTask1(  +prompt("Введите число a"),
  // +prompt("Введите число b"),
  //  +prompt("Введите число c"));

//+ Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты.
// Каждый квадрат имеет размер 1x1 и не может быть разбит.
// Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
//
// + Например, если вам дается плитка шоколада размером 2 x 1,
// вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
//
// + Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются,
// если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

  const adTask2 =  function(a, b) {
    let sumNadlom = 0;
    if ((a == 0) && (b == 0) || (a == 1) && (b == 1)) {
      console.log('0')
    } else {
      sumNadlom = (a - 1) + a * (b - 1);
      console.log(sumNadlom)
    }

  }
  const xSlices = Number(prompt("Введите число a"));
  adTask2(xSlices,+prompt("Введите число b"));
}

//Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

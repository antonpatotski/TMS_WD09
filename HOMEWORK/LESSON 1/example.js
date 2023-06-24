// Задание 1
let x = 20;
let y = 58;
let z = 42;

console.log(x+y+z);

// Задание 2
let sec = 60;
let min = 60;
let hour = 24;
let year = 365;

let myAgeInSeconds = (15*365)*hour*min*sec;
console.log(myAgeInSeconds + " секунд живу");

// Задание 3
let count = 42;
let userName = '42';

let number = "" + count;
let string = parseInt(userName);

console.log(typeof number);
console.log(typeof string);

// Задание 4
let a = 1;
let b = 2;
let c = "белых медведей";

console.log(a.toString() + b.toString() + " " + c); // как здесь лучше?

// Задание 5

let one = 'доступ';
let two = 'морпех';
let three = 'наледь';
let four = 'попрек';
let five = 'рубило';

let lengthWords = one.length + two.length + three.length + four.length + five.length;

console.log(lengthWords);
console.log(lengthWords / 6 + " букв в каждом слове");

// Задание 6
let string2 = "test";
let number2 = 30;
let boolean = true;

console.log(`Variable: string have type: ${typeof string2}`);
console.log(`Variable: number have type: ${typeof number2}`);
console.log(`Variable: boolean have type: ${typeof boolean}`);

// // Задание 7
// let name = prompt("Введите имя: ");
// let age = prompt("Введите возраст: ");
// // let isAdult = age < 18 ? "Совершеннолетний" : "Несовершеннолетний";
//
// console.log("Имя: " + name, "Возраст: " + age);
// // console.log(isAdult);

// Домашка 3
let string3 = 'true';
let boolean3 = false;
let number3 = 17;
let error = undefined;
let zxc = null;

console.log("Тип string: ", typeof(string3));
console.log("Тип boolean: ", typeof(boolean3));
console.log("Тип number: ", typeof(number3));
console.log("Тип error: ", typeof(error));
console.log("Тип zxc: ", typeof(zxc));


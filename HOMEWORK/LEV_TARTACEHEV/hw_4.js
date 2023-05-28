
export function blabla(){
  // #### Task 1 🖥

  // Выведи все элементы массива в консоль с помощью метода **`forEach`**

  const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

  //   fibonacci.forEach(element => console.log(element));

    // > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

    const arrowFibonacci = (array) => array.forEach(element => console.log(element));
    
  //   arrowFibonacci(fibonacci);

    function declarateFibonacci (array){
      array.forEach(element => console.log(element));
    };

    
  //   declarateFibonacci(fibonacci);

  // #### Task 2 🖥

  // Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:

  // > ['member 1: Darya', 'member 2: Masha', ... etc]


  const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

  const nunUsers = users.map((body, id) => `member ${id + 1}: ${body}`);

  // console.log(nunUsers);


  // #### Task 4 🖥

  // Используя метод **`reduce`** получите сумму всех чисел массива.

  const febSum =  fibonacci.reduce((a,b) => a + b);

  // console.log(febSum);

  // #### Task 5 🖥

  // Используя метод **`find`** найдите в массиве первое четное число.


  const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

  firstEvenNumber = numbers.find(element => element % 2 === 0);

  // console.log(firstEvenNumber);

  // ### ADVANCED level
  // #### Task 1 👨‍🏫

  // Реализуйте функцию которая будет проверять, является ли слово палиндромом.

  function isPalindrome(word){
    const reversed = word.split("").reverse().join("");
    return reversed === word;
  }

  // console.log(isPalindrome("wow"));

  // #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

  // + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
  // + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
  // + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

  // > Примечание: для этой задачи **`y`** не считается гласной.

  function removeVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return text.replace(/[aeiou]/ig, ""); // https://www.w3schools.com/js/js_regexp.asp
  }

  // console.log(removeVowels("dasd adasd aa"));

  // #### Task 3 👨‍🏫 Нет истории, нет теории

  // + В приведенных ниже примерах показано, как написать функцию:


      // accum("abcd") -> "A-Bb-Ccc-Dddd"
      // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
      // accum("cwAt") -> "C-Ww-Aaa-Tttt"


  // > Параметр - это строка, которая включает только буквы от a..z и A..Z.

  function accum(string){
    const chars = string.split("");
    let acccum = "";
    for (let i = 0; i < chars.length; i++){
      acccum += chars[i].toUpperCase() + chars[i].toLowerCase().repeat(i);
      if ( i < chars.length-1 ) acccum += "-";
    }
    return acccum;
  }
  // console.log(accum("asdqv")); 


  // #### Task 4 👨‍🏫 Изограммы

  // + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

  // ```javascript
  //     isIsogram("Dermatoglyphics") == true
  //     isIsogram("aba") == false
  //     isIsogram("moOse") == false // -- ignore letter case
  // ```

  function isogramm(string){
    string = string.toLowerCase();
    let strArr = string.split("");
    strArr.sort();
    
    for (let i = 0; i < strArr.length; i++){
      if (strArr[i] === strArr[i+=1]) return false;
    }

    return true;
  }
  console.log(isogramm(""));
}




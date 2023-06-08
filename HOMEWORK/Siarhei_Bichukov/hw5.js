"user strict";

//Выведи все элементы массива в консоль с помощью метода **`forEach`**
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`
export function hW5() {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    function fibonacciDecl() {
        fibonacci.forEach(elem => console.log(elem));
    }

    const fibonacciArrow = () => {
        return fibonacci.forEach(elem => console.log(elem));
    }
    // fibonacciDecl()
    // fibonacciArrow()


//----------------------------

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
// в котором каждый элемент массива будет содержать строку вида:
//
//     > ['member 1: Darya', 'member 2: Masha', ... etc]
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

    let usersNew = users.map(function (Decl, x) {
        return (`'member ${x + 1}: ` + Decl)
    })

    let usersNew1 = (array) => {
        return array.map((a, b) => `'member ${b + 1}: ${a}`)
    }
// console.log(usersNew);
// console.log(usersNew1(users));


// Используя метод **`reduce`** получите сумму всех чисел массива.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.


    function redDecl(array) {
        return array.reduce((a, b) => a + b);

    }

    const redArrow = (array) => {
        return array.reduce((a, b) => a + b);

    }
//
// console.log(redDecl(fibonacci))
// console.log(redArrow(fibonacci))

//----------------------------

// Используя метод **`find`** найдите в массиве первое четное число.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

    function findDecl(array) {
        return array.find((e) => (e % 2) === 0)
    }

    const findArrow = (array) => {
        return array.find((e) => (e % 2) === 0)
    }
// console.log(findDecl(numbers))
// console.log(findArrow(numbers))

//----------------------------

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.


    function isPal(word) {

        return word.split('').reverse().join('') == a
    }
    // let a= prompt('Введите слово');
    // console.log(isPal(a))

//----------------------------

// Тролли атакуют наш раздел с комментариями!!!
//
// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
//
// > Примечание: для этой задачи **`y`** не считается гласной.



    const troll = (words) => {
        let letter = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let nWords = a.split('');
        let newWords = nWords.filter(el => !letter.includes(el) )

        return newWords.join('')
    }
    // let a = prompt('Предложение')
    // console.log(troll(a));


    const advancedTask3 = function () {
        //+ В приведенных ниже примерах показано, как написать функцию:
        //
        // ```javascript
        //     accum("abcd") -> "A-Bb-Ccc-Dddd"
        //     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
        //     accum("cwAt") -> "C-Ww-Aaa-Tttt"
        // ```
        //
        // > Параметр - это строка, которая включает только буквы от a..z и A..Z.

        const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        const accum = (str) => {
            return str.split('')
                .map((item, index) => capitalizeFirstLetter(Array(index+2).join(item)))
                .join('-')

        }
        console.log(accum('abcd'));
        console.log(accum('RqaEzty'));
        console.log(accum('cwAt'));
    }
    advancedTask3()
}
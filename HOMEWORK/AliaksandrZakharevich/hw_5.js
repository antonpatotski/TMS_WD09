export function homework_5(){

    const task1 = function () {
        //Выведи все элементы массива в консоль с помощью метода **`forEach`**
        // Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

        const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

        function fibonacciFinctionDeclaration(array){
            array.forEach(element => {
                console.log(element);
            })
        }

        const fibonacciArrowFunction = (array) => {
            array.forEach(element => {
                console.log(element);
            })
        }
        fibonacciFinctionDeclaration(fibonacci);
        fibonacciArrowFunction(fibonacci);
    }

    const task2 = function (){
        //Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
        // в котором каждый элемент массива будет содержать строку вида:
        // ['member 1: Darya', 'member 2: Masha', ... etc]
        // Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

        const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
        function usersFunctionDeclaration(array) {
            return array.map((item, index) => `member ${index+1}: ${item}`)
        }
        const usersArrowFunction = (array) => {
            return array.map((item, index) => `member ${index+1}: ${item}`)
        }
        console.log(usersFunctionDeclaration(users));
        console.log(usersArrowFunction(users));
    }

    const task3 = function () {
        //Используя метод **`reduce`** получите сумму всех чисел массива.
        //Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

        const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
        let result = 0;
        function fibonacciFinctionDeclaration(array){
            return array.reduce((sum, current) => sum + current);
        }
        const fibonacciArrowFunction = (array) => {
            return array.reduce((sum, current) => sum + current);
        }
        console.log(fibonacciFinctionDeclaration(fibonacci));
        console.log(fibonacciArrowFunction(fibonacci));
    }

    const task4 = function () {
        //Используя метод **`find`** найдите в массиве первое четное число.
        // > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

        const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

        function findFinctionDeclaration(array) {
            return array.find(item => (item % 2) === 0);
        }
        const findArrowFunction = (array) => {
            return array.find(item => (item % 2) === 0);
        }

        console.log(findFinctionDeclaration(numbers));
        console.log(findArrowFunction(numbers));
    }


    const advancedTask1 = function () {
        //Реализуйте функцию которая будет проверять, является ли слово палиндромом.
        const string = 'tenet';
        const isPalindrome = (str) =>{
            let str2 = str.split('')
                .reverse()
                .join('');
            return str.includes(str2)
        }
        console.log(isPalindrome(string));
    }

    const advancedTask2 = function () {
        // Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
        // Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
        // Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
        // Примечание: для этой задачи **`y`** не считается гласной.

        const textEditor = (str) =>{
            const letters = ['e', 'u', 'i', 'o', 'a', 'E', 'U', 'I', 'O', 'A'];
            const newStr = str.split('');
            const result = newStr.filter(el => !letters.includes(el));
            return result.join('');
        }
        console.log(textEditor('This website is for losers LOL!'));
    }

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


    const advancedTask4 = function () {
        // Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте
        // функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая
        // строка является изограммой. Регистр букв мы игнорируем.

        const isIsogram = (str) => {
            const arrayStr = str.toLowerCase().split('');

            for (let elem of arrayStr) {
                if(arrayStr.indexOf(elem) !== arrayStr.lastIndexOf(elem)){
                    return false;
                }
            }
            return true;
        }
        console.log(isIsogram("Dermatoglyphics"))
        console.log(isIsogram("aba"))
        console.log(isIsogram("moOse"))
    }
    task1()
    task2()
    task3()
    task4()
    advancedTask1()
    advancedTask2()
    advancedTask3()
    advancedTask4()
}
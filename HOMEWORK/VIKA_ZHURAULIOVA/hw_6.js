export function home6() {

    // Дан массив:
    // Выведите в консоль его длину.

    const colors = ['red', 'green', 'blue']
    console.log(colors.length)

    // Дан массив:
    // Выведите в консоль его последний элемент вне зависимости от его длинны.

    const animals = ['monkey', 'dog', 'cat']
    console.log(animals.slice(-1))

//     Дан массив:
//     Удалите все элементы в массиве и выведите в консоль полученный результат.

    const numbers = [5, 43, 63, 23, 90]
    const lenghtNumbers = numbers.length
    console.log(numbers.splice(lenghtNumbers,lenghtNumbers))


    const numeral = [5, 43, 63, 23, 90]
    for(let i = 0; i < numeral.length; i++){
        delete  (numeral[i]);
    }
    console.log(numeral)

//     Дан массив:
//     + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
//     + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
//     + Полученный результат не забудьте вывести в консоль.

    const students = ['Polina', 'Dasha', 'Masha']
    students.pop()
    students.push(`Borya`)
    students.shift()
    students.unshift(`Andrey`)
    console.log(students)

//     Lан массив:
//     Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

    const cats = ['Gachito', 'Tom', 'Batman']

    for(let i = 0; i < cats.length; i++){
        console.log(cats[i]);
    }

    for(let cat of cats) {
        console.log(cat)
    }

    // + Соедините два массива чисел в один.
    // + В полученном массиве попробуйте найти индекс числа **`8`**

    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]

    const generalArr = evenNumbers.concat(oddNumbers)
    console.log(generalArr)
    console.log(generalArr.indexOf(8))


    //     Дан массив:
    //     + Наш бинарный массив неполный, в нем явно не хватает единиц.
    //     + Превратите данный массив в строку.
    //     > [0, 0, 0, 0] -> '0101010'

    const binary = [0, 0, 0, 0]
    let  newBinary = binary.map(a => [a, 1]).flat();

    console.log(newBinary.join(''))


    // Реализуйте функцию которая будет проверять, является ли слово палиндромом.
    const  palindrome = () => {
        let str = 'казак';
        let arr = str.split('');

        let arrReverse = arr.slice(0)
        let newReverse = arrReverse.reverse()

        if(JSON.stringify(arr) === JSON.stringify(newReverse)){

            console.log('palindrome')
        } else {
            console.log('mistake')
        }
    }
    palindrome()


    // Выведите в консоль среднее значение чисел в многомерном массиве.
    function getSum() {
        const matrix = [
            [12, 98, 78, 65, 23],
            [54, 76, 98, 43, 65],
            [13, 324, 65, 312],
            [9092, 22, 45, 90000],
        ]

        let newMatrix = matrix.flat()

        const newMatrixSum = newMatrix.reduce((last, current) =>last + current);
        console.log(newMatrixSum)

        let sum = 0;
        newMatrix.map((item) => sum += item);
        console.log(sum);

    }
    getSum()


    // Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные.
    // Оба массива затем выведите в консоль.

    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

    let positive = mixedNumbers.filter(function(elem) {
        if (elem >= 0) {
            return true;
        } else {
            return false;
        }
    });
    console.log(positive)

    let negative = mixedNumbers.filter(function(elem) {
        if (elem < 0) {
            return true;
        } else {
            return false;
        }
    });

    console.log(negative)


    // Создать массив длинной не менее 5, из динамически созданных случайных чисел.
    // Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив.
    // В конце вывести оба массива в консоль.

    const random = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr[i] = Math.round(Math.random() * 100);

        }
        let numbers = arr.slice()
        let cube = [ ];

        for (let k in numbers) {
            cube[k] = Math.pow(numbers[k], 3);
        }

        console.log(arr);
        console.log(cube);

    }
    random()


}
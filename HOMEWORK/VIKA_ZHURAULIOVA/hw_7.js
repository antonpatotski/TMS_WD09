export function home7() {

//     Выведи все элементы массива в консоль с помощью метода **`forEach`**
//     > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
    function fibonacciFirst() {
        fibonacci.forEach(element => console.log(element));
    }
    const fibonacciSecond = () => {
        return fibonacci.forEach(element => console.log(element));
    }
    fibonacciFirst()
    fibonacciSecond()


//     Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида://
//     > ['member 1: Darya', 'member 2: Masha', ... etc]0

    const arrayMap = () => {
        const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
        const newUsers = users.map((item) => `member ${users.indexOf(item)+1}: ${item}`)
        console.log(newUsers)
    }
    arrayMap()


    // С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

    const numbers = [7, -4, 32, -90, 54, 32, -21]
    const result = numbers.filter(item => item > 0).sort((a, b) => a - b);
    console.log(result);


//     Используя метод **`reduce`** получите сумму всех чисел массива.

        const sumFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
        const newSumFibonacci = sumFibonacci.reduce((last, current) =>last + current)
        console.log(newSumFibonacci)


    // Используя метод **`find`** найдите в массиве первое четное число.
    // > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

        const numeric = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
        console.log(numeric.find((e) => ((e % 2) === 0)))


    // + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
    // + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
    // + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
    // > Примечание: для этой задачи **`y`** не считается гласной.


    const consonants = (string) => {
        const stringArr = string.split('')
        const exclude = ['e', 'u', 'i', 'o', 'a', 'E', 'U', 'I', 'O', 'A']
        const result = stringArr.filter(el => !exclude.includes(el));
        const newString = result.join('')
        console.log(newString)
    }
    consonants('This website is for losers LOL')


    // В приведенных ниже примерах показано, как написать функцию:
    // Параметр - это строка, которая включает только буквы от a..z и A..Z.


    const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)
    const accum = (str) => str.split('')
        .map((letter, i) => capitalizeFirstLetter(Array(i+2).join(letter).toLowerCase()))
        .join('-')

    console.log(accum('cwAt'))


    // + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
    // Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
    // Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

    // isIsogram("Dermatoglyphics") == true
    // isIsogram("aba") == false
    // isIsogram("moOse") == false // -- ignore letter case

    const izogram = (stringIzogram) => {

        const izogrammArr = stringIzogram.split('')
        const isIsogram = izogrammArr.map((n, i, a) => a.indexOf(n) !== a.lastIndexOf(n))

        if (isIsogram.includes(true)) {
            console.log(`${stringIzogram} - is izogram`)
        } else {
            console.log(`${stringIzogram} - isn't izogram`)
        }
    }
    izogram('aba')


//     + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную **`total1`**
//     + Затем замените все числа `7` на число `1` и назовите это число **`total2`**
//     + После верните разницу между суммой цифр **`total1`** и **`total2`**
// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

    const transformation = (str) => {
        const strArr = str.split('')
        let newArr = strArr.map(function (i) {
            return i.charCodeAt(0)
        })
        let total1 = newArr.join('')
        total1.replace(/7/g, "1" )
        const total2 =  total1.replace(/7/g, "1" )
        const diff = total1 - total2
        console.log(`Первое число ${total1}, второе число ${total2}. Разница  ${total1}-${total2} = ${diff}`)

    }

    transformation('fMgK9L')



// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен
// `(`,  если этот символ появляется только один раз в исходной строке, или `)`,
//если этот символ встречается более одного раза в исходной строке.
// Игнорируйте использование заглавных букв при определении дубликата символа.

// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

    function duplicateEncode(word){
        word = word.toLowerCase().split("");
        let key = {}
        let result = ""
        for (let i = 0; i < word.length; i++) {
            console.log(key[word[i]])
            if (key[word[i]] === undefined) {
                key[word[i]] = 1
            } else  key[word[i]]++
        }

        for (let k = 0; k < word.length; k++) {
            if (key[word[k]] === 1) {
                result += "("
            } else result += ")"
        }
        console.log(result)
    }
    duplicateEncode('qqqwwwerty')


    //Есть массив чисел [9, 44, 7, 4, 5, 28, 77, 20, 6, 7]
    // Нужно отсортировать только четные значения не меняя индекса нечетных
    // т.е. на выходе получить [9, 4, 7, 6, 5, 20, 77, 28, 44, 7 ]

    const sortingEven = () => {
            const arr = [9, 44, 7, 4, 5, 28, 77, 20, 6, 7]
        for (let i = 0; i < arr.length; i++) {
            for (let k = i; k < arr.length; k++) {
                if (((arr[i] % 2) === 0) && ((arr[k] % 2) === 0) && (arr[i] > arr[k]) ) {
                    let fin = arr[i];
                    arr[i] = arr[k];
                    arr[k] = fin;
                }
            }
        }
    console.log(arr)
    }
    sortingEven()
}



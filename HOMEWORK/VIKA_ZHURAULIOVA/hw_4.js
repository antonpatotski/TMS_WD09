export function home4() {

    // Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
    //
    // > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
    function getSum(number) {
        let getSum = 0;

        for (let i = 1; i <= number; i++) {
            getSum += i;
        }
        return getSum;
    }

    console.log(getSum(100))


    // Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент
    // и верните результат переплаты по кредиту:
    //
    //     + процентная ставка в год — 17%,
    //     + количество лет — 5.

    function credit(sumCredit) {
        const overPayment = (sumCredit * 0.17) * 5;
        return overpayment;
    }

    console.log(`Переплата по кредиту - ${credit(1000)} $`)

    // Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
    //     + строку
    //     + значение от
    //      + значение по
    //
    // После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

    function trimString(str, numFrom, numTo) {

        let newString = str.slice(numFrom, numTo)
        return newString
    }

    console.log(trimString('Hi, it is a beautiful day!', 5, 9));


    // Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
    //
    // > Для 2021 это будет 5.

    function getSumNumbers(f) {
        let sumNumber = 0;
        let stringNumber = String(f);

        for (let i = 0; i < stringNumber.length; i++) {
            sumNumber += Number(stringNumber[i]);
        }
        return sumNumber
    }

    console.log(getSumNumbers(123))


    // Написать функцию **`getSum`** которая принимает два целых числа a и b,
    // которые могут быть положительными или отрицательными,
    // найти сумму всех чисел между ними, включая их, и вернуть ее.
    // Если два числа равны, верните a или b.
    //

    function getSumDiff(k, l) {
        let sumResult = 0;

        if (k < l) {
            for (let i = k; i <= l; i++) {
                sumResult += i;
            }
        } else if (k > l) {
            for (let i = k; i >= l; i--) {
                sumResult += i;
            }
        }
        return sumResult;
    }

    console.log(getSumDiff(-1, 2));


    // Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
    //
    // + булевое значение
    // + функцию **foo** которая выводит в консоль свое имя
    // + функцию **boo** которая выводит в консоль свое имя
    //
    // > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**

    function foo () {
        console.log(` Function name - ${foo.name}`)
    }
    function boo () {
        console.log(` Function name - ${boo.name}`)
    }
    function fooboo(boolean, functionFoo ,functionBoo ) {

        if (boolean) {
            functionFoo()
        } else {
            functionBoo()
        }
    }
    fooboo(true,foo,boo)


    // + Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**,
    // если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.

    function triangle(m,n,o) {
        if(((m + n) > o) && ((m + o) > n) && ((o + n) > m )) {
            return 'true'
        } else if ((m === n) && (n === o)) {
            return 'true'
        } else {
            return 'false'
        }
    }
    console.log(triangle(5, 9,12))

    // + Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты.
    // Каждый квадрат имеет размер 1x1 и не может быть разбит.
    // Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
    //
    // + Например, если вам дается плитка шоколада размером 2 x 1,
    // вы можете разделить ее на отдельные квадраты всего за один надлом,
    // но для размера 3 x 1 вы должны сделать два надлома.
    //
    // + Если входные данные недействительны, вы должны вернуть 0
    // (поскольку надломы не требуются, если у нас нет шоколада для разделения).
    // Ввод всегда будет неотрицательным целым числом.

    function chocolate (z, y) {
        let chocolateBreak
        chocolateBreak = (z*y)-1;
        if (((z === 1) && (y === 1)) || (z === 0) || (y === 0) || (z < 0) || (y < 0)) {
            chocolateBreak = 0
        } else {

        }
        return chocolateBreak
    }
    console.log (`You need to break the chocolate ${chocolate(5, 8)} times`)


    // + Напишите программу для вычисления общей стоимости покупки телефонов.
    // Вы будете продолжать покупать телефоны (подсказка: циклы!),
    // пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.


    const treshold = 180;
    const tax = 0.03;
    const phonePrice = 79.99;
    const accessory_price = 10.99;

    let balance = prompt(`Введите, пожалуйста, ваш балланс.`)
    let amount = 0;

    function calcTax(amount) {
        return amount * tax;
    }

    function formatQuantity(amount) {
        return `$ ${amount.toFixed( 2 )}` ;
    }

    while (amount < balance) {
        amount =  amount + phonePrice;

        if (amount < treshold) {
            amount = amount + accessory_price;
        }
    }

    amount = amount + calcTax( amount );

    console.log(
        `Ваша покупка: ${formatQuantity(amount)}`
    );

    if (amount > balance) {
        console.log(`Вы не можете позволить себе эту покупку.`);
    }
}
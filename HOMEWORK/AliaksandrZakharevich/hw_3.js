export function homework_3() {

    // Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.
    //
    // > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
    const getSumFunction = function (number) {
        let result = 0;
        for (let i = 1; i <= number; i++){
            result += i;
        }
        return result;
    }

    // Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент
    // и верните результат переплаты по кредиту:
    //
    //     + процентная ставка в год — 17%,
    //     + количество лет — 5.
    const loanCalculator = function (sumOfMoney){

        let sumFromYear = sumOfMoney * 0.17;
        return sumFromYear * 5
    }

    //Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
    // + строку
    // + значение от
    // + значение по
    //
    // После вызова функция должна вернуть переданную строку обрезанную по значениям от и по
    const trimString = function (string, indexStart, indexEnd){
        return string.slice(indexStart, indexEnd);
    }

    //Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.
    const getSumNumbers = function (number){
        number = number.toString();
        let result = 0;
        for(let i = 0; i < number.length; i++){
            result += parseInt(number[i]);
        }
        return result;
    }

    //Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или
    //отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
    const getSum = function (a, b){
        let result = 0;
        if (a < b){
            for (let i = a; i <= b; i++){
                result += i;
            }
        } else if (a > b){
            for (let i = b; i <= a; i++){
                result += i;
            }
        } else {
            result = a;
        }

        return `getSum(${a}, ${b}) == ${result}`;
    }

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
    const fooboo = function (isActive, foo, boo){
        isActive ? foo() : boo();
    }

    // Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать **true**,
    // если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.
    const advancedTask1 = function (a, b, c){
        return ((a + b > c) && (a + c > b) && (b + c > a));
    }

    // Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. Каждый квадрат имеет
    // размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
    const advancedTask2 = function (n, m){
        if((n <= 0 || m <= 0) || (isNaN(n) || isNaN(m))){
            console.log('Надломы не требуются');
        } else {
            console.log(`Требуется ${n * m - 1} надломов(а)`);
        }
    }

    //+ Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны
    // (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары
    // для каждого из телефонов.
    //
    // + После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму
    // покупки, правильно отформатировав её.
    //
    // + Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
    //
    // + Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и
    // переменную для вашего «баланса банковского счета».
    //
    // + Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением
    // до двух знаков после запятой.
    //
    // +  Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например,
    // запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!
    const advancedTask3 = function () {
        const phonePrice = 999.99;
        const phoneAccessoryPrice = 149.59;
        const taxRate = 1.2;
        let phoneCount = 0;
        let balance = parseInt( prompt("Please, enter your balance"));

        const priceWithTaxFunc = function (_phonePrice, _phoneAccessoryPrice, _taxRate){
            return (_phonePrice + _phoneAccessoryPrice) * _taxRate;
        }

        const priceFormat = function (price){
            console.log(`Phone price is ${phonePrice.toFixed(2)} BYN`);
            console.log(`Accessory price is ${phoneAccessoryPrice.toFixed(2)} BYN`);
            console.log(`Tax rate is ${taxRate.toString().split(".")[1]+"0"}%`);
            console.log(`All price is ${price.toFixed(2)} BYN`);
        }
        const balanceFormat = function (balance){
            console.log(`Your balance is ${balance.toFixed(2)} BYN`);
        }
        const priceWithTax = priceWithTaxFunc(phonePrice, phoneAccessoryPrice, taxRate);
        priceFormat(priceWithTax);
        balanceFormat(balance);

        while (balance > priceWithTax){
            console.log("You can pay for the goods");
            balance -= priceWithTax;
            phoneCount++;

            priceFormat(priceWithTax);
            balanceFormat(balance);
        }

        console.log("You can't pay for the goods");
        console.log(`You buy ${phoneCount} phones. Thanks for shopping`);
    }

}
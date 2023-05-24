export function homework_3() {

    const getSumFunction = function (number) {
        let result = 0;
        for (let i = 1; i <= number; i++){
            result += i;
        }
        return result;
    }

    const loanCalculator = function (sumOfMoney){
        let sumFromYear = sumOfMoney * 0.17;
        return sumFromYear * 5
    }

    const trimString = function (string, indexStart, indexEnd){
        return string.slice(indexStart, indexEnd);
    }

    const getSumNumbers = function (number){
        number = number.toString();
        let result = 0;
        for(let i = 0; i < number.length; i++){
            result += parseInt(number[i]);
        }
        return result;
    }

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

    const foo = function (){
        console.log("foo");
    }
    const boo = function () {
        console.log("boo");
    }
    const fooboo = function (isActive, foo, boo){
        isActive ? foo() : boo();
    }

    const advancedTask1 = function (a, b, c){
        return ((a + b > c) && (a + c > b) && (b + c > a));
    }

    const advancedTask2 = function (n, m){
        if((n <= 0 || m <= 0) || (isNaN(n) || isNaN(m))){
            console.log('Надломы не требуются');
        } else {
            console.log(`Требуется ${n * m - 1} надломов(а)`);
        }
    }
    advancedTask2(1, 2);
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
export function homework_2(){
    function task1(){
        //Создайте переменные и присвойте им значения:
        const firstVariable = 'true';
        const secondVariable = false;
        const thirdVariable = 17;
        const fourthVariable = undefined;
        const fifthVariable = null;

        console.log(typeof firstVariable);
        console.log(typeof secondVariable);
        console.log(typeof thirdVariable);
        console.log(typeof fourthVariable);
        console.log(typeof fifthVariable);
    }

    function task2(){
        //Даны две переменные:
        //С помощью условий выведите в консоль разработчика наибольшее число.
        let height = 15;
        let width = 20;
        height > width ? console.log(height) : console.log(width);
    }

    function task3(){
        // Написать перебор от 1 до 20, где выведутся все числа кратные трём.
        for(let i = 1; i <= 20; i++){
            if(i % 3 === 0){
                console.log(i);
            }
        }
    }

    function task4(){
        // Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
        //     Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
        //     Для решения этой задачи нам помогут логические операторы **`|| &&`**.
        let key = true;
        let documents = true;
        let pen = true;
        let apple = false;
        let orange = true;
        let shouldGoToWork = key && documents && pen && (apple || orange);
        console.log(shouldGoToWork);
    }

    function task5(){
        // Запросить у пользователя число:
        //
        // 1. Если число делится без остатка на 5 выводим сообщение Fiz
        // 2. Если число делится без остатка на 3 выводим сообшение Buz
        // 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

        let number = parseInt(prompt("Введите число"));
        if(!isNaN(number)){
            if((number % 3 === 0) && (number % 5 === 0)){
                console.log("FizBuz");
            } else if (number % 5 === 0){
                console.log("Fiz");
            } else if(number % 3 === 0){
                console.log("Buz");
            } else {
                console.log("Число не делется ни на 3, ни на 5");
            }
        } else {
            console.log("Нужно ввести число");
        }
    }

    function task6(){
        // Написать программу, которая выполняет следующие операции:
        //
        // - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`.
        // - Если меньше, то выводит сообщение - `Пей колу`.
        // - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.

        let age = parseInt(prompt("Введите свой возраст"));

        if(!isNaN(age)){
            if(age > 18){
                console.log(`Попей пивка`);
            } else {
                (age >= 16) && (age <= 18) ? console.log(`Можешь выкурить сигаретку, только маме не говори`) : console.log(`Пей колу`);
            }
        } else {
            console.log("Необходимо ввести возраст");
        }
    }

    function task7(){
        // Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.
        //
        // + `юг` на юг пойдешь счастье найдешь
        // + `север` на север пойдешь много денег найдешь
        // + `запад` на запад пойдешь верного друга найдешь
        // + `восток` на восток пойдешь разработчиком станешь

        let sideOfTheWorld = prompt("Введите сторону света куда бы Вы хотели отправиться").toLowerCase();
        switch (sideOfTheWorld){
            case "юг":
                console.log("на юг пойдешь счастье найдешь");
                break;
            case "север":
                console.log("на север пойдешь много денег найдешь");
                break;
            case "запад":
                console.log("на запад пойдешь верного друга найдешь");
                break;
            case "восток":
                console.log("на восток пойдешь разработчиком станешь");
                break;
            default:
                console.log("Попробуйте ввести сторону света еще раз");
        }
    }

    function advancedTask1(){
        //     Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'
        //     Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через **alert**

        let name = 'пОлИнА нАбЕрЕжНаЯ';
        name = name
            .split(' ')
            .map((letter) => `${letter[0].toUpperCase()}${letter.slice(1).toLowerCase()}`)
            .join(' ');
        alert(`Привет, ${name}`);
    }

    function advancedTask2(){
        // Написать программу, которая выполняет следующие операции:
        // 1. Запрашивает у пользователя число.
        // 2. Последовательно задает вопрос:
        // cколько отнять / прибавить / умножить / разделить от предыдущего результата?
        // 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например:
        //  > ((((6 - 10) + 5) * 20) / 2 = 110)

        let number = parseInt(prompt("введите число"));
        let result = number;
        if(!isNaN(number)){
            let subtractNumber = parseInt(prompt("Сколько отнять от предыдущего результата?"));
            !isNaN(subtractNumber) ? result = number - subtractNumber : subtractNumber = 0;
            let addNumber = parseInt(prompt("Сколько прибавить к предыдущему результату?"));
            !isNaN(addNumber) ? result += addNumber : addNumber = 0;
            let multiplyNumber = parseInt(prompt("На сколько умножить предыдущий результат?"));
            !isNaN(multiplyNumber) ? result *= multiplyNumber : multiplyNumber = 1;
            let divisionNumber = parseInt(prompt("На сколько разделить предыдущий результат?"));
            (divisionNumber !== 0) && !isNaN(divisionNumber) ? result /= divisionNumber : divisionNumber = 1;
            alert(`((((${number} - ${subtractNumber}) + ${addNumber}) * ${multiplyNumber}) / ${divisionNumber} = ${result}`);
        } else {
            alert("Необходимо ввести число");
        }
    }

    function advancedTask3(){
        //     Написать программу, которая будет выводить в консоль лесенку.
        //     #
        //     ##
        //     ###
        //     ####
        //     #####
        //     ######
        //     > Не забудьте вопспользоваться циклами
        let sharpString = '';
        for (let i = 0; i < 6; i++) {
            sharpString += '#';
            console.log(sharpString);
        }
    }
}
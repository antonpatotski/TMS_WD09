export function homework(){
    function task1(){
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
        let height = 15;
        let width = 20;
        height > width ? console.log(height) : console.log(width);
    }

    function task3(){
        for(let i = 1; i <= 20; i++){
            if(i % 3 === 0){
                console.log(i);
            }
        }
    }

    function task4(){
        let key = true;
        let documents = true;
        let pen = true;
        let apple = false;
        let orange = true;
        let shouldGoToWork = key && documents && pen && (apple || orange);
        console.log(shouldGoToWork);
    }

    function task5(){
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
        let name = 'пОлИнА нАбЕрЕжНаЯ';
        name = name.toLowerCase();
        name = name.split(" ");
        name[0] = name[0].replace(name[0][0], 'П');
        name[1] = name[1].replace(name[1][0], 'Н');
        name = name.join(" ");
        alert(`Привет, ${name}`);
    }

    function advancedTask2(){
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
        let sharpString = '';
        let rowCount = 5;
        for(let i = 0; i <= rowCount; i++){
            for(let j = 0; j<i; j++){
                sharpString += '#';
            }
            console.log(sharpString);
            sharpString = '';
        }
    }
}
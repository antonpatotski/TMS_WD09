export const homework = function () {
    let chose=prompt("Введите номер задания");

    const a = 'true';
    const b = false;
    const c = 17;
    const d = undefined;
    const e = null;

    const height = 15;
    const width = 20

    let arr = Array();

    const key = true;
    const documents = true;
    const pen = true;
    const apple = false;
    const orange = true;

    const str = "пОлИнА нАбЕрЕжНаЯ";

    switch (chose)
    {
        case 1:
        {
            console.log(`Тип: ${typeof(a)}\nТип: ${typeof(b)}\nТип: ${typeof(c)}\nТип: ${typeof(d)}\nТип: ${typeof(e)}\n`);
            break;
        }
        case 2:
        {
            let maxNumber = (height > width) ? height : width;
            console.log("Наибольшее число: " + maxNumber);
            break;
        }
        case 3:
        {
            for(let i=1;i<=20;i++) {
                if(i%3===0)
                {
                    arr.push(i);
                }
            }
            console.log(arr);
            break;
        }
        case 4:
        {
            let allItemsIsTaken = (key && documents && pen) && (apple || orange);
            console.log(allItemsIsTaken);
            break;
        }
        case 5:
        {
            let questionUser = prompt("Введите число");

            if(questionUser%5===0 && questionUser%3===0) {
                console.log("FizBuz");
            }

            else if(questionUser%5===0) {
                console.log("Fiz");
            }

            else if(questionUser%3===0) {
                console.log("Buz");
            }
            break;
        }
        case 6:
        {
            let ageUser = prompt("Введите ваш возраст");

            if(ageUser>18)
            {
                console.log("Попей пивка");
            }
            else if(ageUser>=16 || ageUser<=18)
            {
                console.log("Можешь выкурить сигаретку, только маме не говори");

            }
            else
            {
                console.log("Пей колу");
            }
            break;
        }
        case 7:
        {
            let flag = true;
            while(flag) {
                let chooseForExercise = prompt("Введите сторону света");
                switch (chooseForExercise) {
                    case 'юг': {
                        console.log("на юг пойдешь счастье найдешь");
                        flag=true;
                        break;
                    }
                    case 'север': {
                        console.log("на север пойдешь много денег найдешь");
                        flag=true;
                        break;
                    }
                    case 'запад': {
                        console.log("на запад пойдешь верного друга найдешь");
                        flag=true;
                        break;
                    }
                    case 'восток': {
                        console.log("на восток пойдешь разработчиком станешь");
                        flag=true;
                        break;
                    }
                    default:
                    {
                        console.log("Неправильный ввод");
                        flag=true;
                        break;
                    }
                }
            }
            break;
        }
        case 8:
        {
            alert(str.toLowerCase());
            break;
        }
        case 9:
        {
            let number = prompt("Введите число:");
            let result = Number(number);

            let subtract = prompt("Сколько отнять от предыдущего результата?");
            result -= Number(subtract);

            let add = prompt("Сколько прибавить к предыдущему результату?");
            result += Number(add);

            let multiply = prompt("На сколько умножить предыдущий результат?");
            result *= Number(multiply);

            let divide = prompt("На сколько разделить предыдущий результат?");
            result /= Number(divide);

            let formula = `(((((${number} - ${subtract}) + ${add}) * ${multiply}) / ${divide}) = ${result})`;
            alert(formula);

            break;

        }
        case 10:
        {
            for (let i = 1; i <= 6; i++) {
                let row = '';

                for (let j = 1; j <= i; j++) {
                    row += '#';
                }

                console.log(row);
            }
            break;
        }

    }

}
export function homework_4(){

    //Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.
    const task1 = function () {
        const obj = {key1: 'value1', key2: 'value2'};

        console.log(obj);

        delete obj.key1;
        delete obj.key2;

        console.log(obj);
    }

    //Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный
    // ключ и если есть вывести в консоль **true**
    const task2 = function (){
        const obj = {key1: 'value1', key2: 'value2'};

        console.log('key1' in obj);
    }

    //C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.
    const task3 = function () {
        const student = {
            name: 'John',
            age: 19,
            inHappy: true
        };
        const keys = Object.keys(student);
        keys.forEach(element => console.log(element));
        const values = Object.values(student);
        values.forEach(element => console.log(element));
    }

    //Вывести в консоль слово красный и синий
    const task4 = function (){
        const colors = {
            'ru pum pu ru rum': {
                red: 'красный',
                green: 'зеленый',
                blue: 'синий'
            },
        };
        for (const colorsKey in colors) {
            if('red' in colors[colorsKey]) console.log(colors[colorsKey].red);
            if('blue' in colors[colorsKey]) console.log(colors[colorsKey].blue);
        }
    }

    //Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
    const task5 = function (){
        let salaries = {
            andrey: 500,
            sveta: 413,
            anton: 987,
            max: 664,
            alexandra: 199
        }
        let avgSalary = 0;
        for (const salary in salaries) {
            avgSalary += salaries[salary];
        }
        const employeesCount = Object.keys(salaries).length;
        return avgSalary / employeesCount
    }

    //Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
    // Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.
    const task6 = function (){
        const login = prompt("Enter Login");
        const password = prompt("Enter Password");

        const user = {
            login: login,
            password: password
        }

        const loginConfirm = prompt("Confirm your login");
        const passConfirm = prompt("Confirm your password");

        if (user.login === loginConfirm && user.password === passConfirm){
            alert("Добро пожалоВать");
        } else {
            alert("Данные не совпадают");
        }
    }

    //Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают
    // результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая
    // будет за нас переводить формат и выводить результат в консоль.
    const advancedTask1 = function (gameScore){
        const score = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine'
        }
        let gameScoreInWords = '';
        const teamsScore = gameScore.split(':');
        const firstTeamScore = teamsScore[0];
        const secondTeamScore = teamsScore[1];

        if(firstTeamScore <= 9 && secondTeamScore <= 9){
            gameScoreInWords = `${score[firstTeamScore]} : ${score[secondTeamScore]}`
        } else {
            alert('The score of any team cannot be more than 9 goals')
        }

        return gameScoreInWords;
    }

    //Даны два одинаковых обьекта. Сравните их так чтобы они были равны
    const advancedTask2 = function (){
        let student1 = {
            name: 'Polina',
            age: 27,
        }

        let student2 = {
            name: 'Polina',
            age: 27,
        }

        const keysCount1 = Object.keys(student1);
        const keysCount2 = Object.keys(student2);

        if(keysCount1.length === keysCount2.length){
            if(student1.name === student2.name){
                if(student1.age === student2.age){
                    return "Object are equal";
                }
            }
        }
        return "Object are not equal";
    }


    //У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом
    // обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**.
    // Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.
    const advancedTask3 = function () {
        const animals = {
            cat: {
                name: 'Енчик',
                age: 3,
            },
            dog: {
                name: 'Орео',
                age: 2,
            }
        }

        console.log(animals.bird.name);

        // const keysAnimals = Object.keys(animals);
        // if("bird" in keysAnimals) console.log(animals.bird.name);
    }
}
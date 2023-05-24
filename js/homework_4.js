export function homework_4(){

    const task1 = function () {
        const obj = {key1: 'value1', key2: 'value2'};

        console.log(obj);

        delete obj.key1;
        delete obj.key2;

        console.log(obj);
    }

    const task2 = function (){
        const obj = {key1: 'value1', key2: 'value2'};

        console.log('key1' in obj);
    }

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

    //firstTeamScore, secondTeamScore
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
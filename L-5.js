export function home5() {

    // Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

    const obj1 = {
        name: 'Vika',
        lastName: 'Zhurauliova',
        age: 23
    }
    delete obj1.name;
    console.log(obj1);

    // Создать любой обьект с двумя ключами и любыми значениями в них,
    // а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

    const obj2 = {
        day: 'Monday',
        season: 'summer',
        numberWeek: 4,
        timeOfTheDay: 'morning'
    }
    console.log('season' in obj2);

    // C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

        const student = {
            name: 'John',
            age: 19,
            isHappy: true
        }

    for (const key in student) {
        console.log(key);
        console.log(student[key]);
    }

    // Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        misha: 664,
        alexandra: 199
    }

    function totalSalaries(salaries) {
        let sum = 0;
        for (let salary of Object.values(salaries)) {
            sum = sum + salary;
        }
        return sum;
    }
    console.log(totalSalaries(salaries))

    //Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
    //Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.

    // const loginValue = prompt('Введите логин');
    // const passwordValue = prompt('введите пароль');
    //
    // const registration = {
    //     login: loginValue,
    //     password: passwordValue
    // }
    //
    // let resultRegistration = confirm(`Пожалуйста, проверьте данные:
    // Логин: ${registration.login}
    // Пароль: ${registration.password}`)
    //
    // if (resultRegistration) {
    //     alert ('Добро пожаловать!!!')
    // } else {
    //     alert('Упс, что-то не так')
    // }

    // Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
    // Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
    // Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.
    function matchResult() {
        return this.quantity
    }

    function teamCountry() {
        return this.country
    }

    const team1 = {
        name: 'Stars',
        country: 'Germany',
        quantity: 3,
        result: matchResult,
        place: teamCountry
    }
    const team2 = {
        name: 'Nuts',
        country: 'Estonia',
        quantity: 5,
        result: matchResult,
        place: teamCountry
    }
    if ((team2.quantity <= 9) && (team1.quantity <= 9)) {
        console.log(`Результат матча:
        ${team1.place()} - ${team1.result()} : ${team2.result()} - ${team2.place()}`)
    }else {
        console.log(`Что-то не так. разбираемся`)
    }

    // Даны два одинаковых обьекта. Сравните их так чтобы они были равны


    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
    function deepEqual (student1, student2){
        return JSON.stringify(student1)===JSON.stringify(student2);
    }
    console.log(deepEqual (student1, student2))

    // У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль.
    // Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**.
    // Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.


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

    console.log(animals?.bird?.name)
}
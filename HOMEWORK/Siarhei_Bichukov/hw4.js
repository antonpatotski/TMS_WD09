"user strict";

export function hW4() {
  // Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта
  let obj = {
    first: 'first',
    second: 'first',
    third: 'third',
  }
  // console.log(delete obj.first);
  // console.log( obj);

//----------------------------

  //Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ
  // и если есть вывести в консоль **true**
  let obj1 = {
    first: 'first',
    second: 'first',
    third: 'third',
  }
  // console.log('third' in obj1);

//----------------------------

//Дан обьект:
//C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.
  const student = {
    name: 'John',
    age: 19,
    isHappy: true
  }
  let a= '';
  let b= '';
  let array = [];

  for (let key in student){
    a+=key+' ';
    array.push(key)
    b+=student[key]+' ';

  }


  // console.log(array.join(' '))
  // console.group('key and value')
  // console.log(a);
  // console.log(b);
  // console.groupEnd()

//----------------------------

  // Дан обьект:
  //     Вывести в консоль слово красный и синий

  const colors = {
    'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
    }

  }
  let z= '';
  const new1=colors['ru pum pu ru rum'];
  for (let key in new1){
    if (new1[key]=='красный' || new1[key]=='синий')
      z+=new1[key]+' ';


  }
  // console.log(z);

  //----------------------------

  // Дан обьект:
  //     Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
  //
  let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey1: 664,
    alexandra: 199
  }
  let sum= 0;
  let i= 0;

  for (let key in salaries) {
    sum+=  salaries[key];
    i++
  }

  let srt = sum/i;
  // console.log(srt);

  //----------------------------

  // Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект.
  //     Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**.

  const validation={
    // login : prompt("Введите login"),
    // password : prompt("Введите password")
  }
  const confirm = {
    // login : prompt("Введите login для подтверждения"),
    // password : prompt("Введите password для подтверждения")
  }

// if (validation.login === confirm.login && validation.password === prompt("Подтвердите password"))
  {
    // console.log(alert('Добро пожалоВать'));
  }

  //----------------------------

//Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
// Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

  const numbers = {
    1 : "Один",
    2 : "Два",
    3 : "Три",
    4 : "Четыри",
    5 : "Пять",
    6 : "Шесть",
    7 : "Семь",
    8 : "Восемь",
    9 : "Девять",
  }
  let rez = prompt('Введите результат матча. Пример формата 2:5');
  let example = rez.split(':');


  console.log(numbers[example[0]] + ":" + numbers[example[1]]);

  //----------------------------

  // Даны два одинаковых обьекта. Сравните их так чтобы они были равны

  let student1 = {
    name: 'Polina',
    age: 27,
  }

  let student2 = {
    age: 27,
    name: 'Polina',

  }
  // console.log(JSON.stringify(student1) === JSON.stringify(student2));

  // if (Object.keys(student1).length !== Object.keys(student2).length) {
  //   return false;
  // }
  //
  // for (let key in student1) {
  //   if (student1[key] !== student2[key] ) return false;
  // }
  //
  // return true;

  //----------------------------

  // У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль. Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**.
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
  // console.log( animals.bird?.name);
}

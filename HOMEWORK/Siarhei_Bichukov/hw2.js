"user strict";

export function hW2(){

  function Task1() {
    console.log(typeof "true");
    console.log(typeof false);
    console.log(typeof 17);
    console.log(typeof undefined);
    console.log(typeof null);
  }
  Task1();

  function Task2(){
    let height = 15
    let width = 20

    if (height === width){
      alert('height =  width') ;
    } else if (height > width){
      alert(`height ${height}`) ;
    } else
      alert(`width ${width}`) ;
  }
  //
  Task2();

  function Task3(){
    for (let i=1; i<=20; i++ ){
      if (i % 3 === 0) console.log(i);
    }
  }

  Task3();
  function Task4()    {
    const key = true
    const documents = true
    const pen = true
    const apple = false
    const orange = true
    let show=((key && documents && pen) && (apple || orange)) ? 'ok' : 'no'
    console.log(show);
  }

  Task4();
  function Task5()    {
    let test = prompt("Введите число");
    if ((test % 5) === 0 && (test % 3) === 0) {
      console.log('FizBuz');
    } else if (test % 5 == 0) {
      console.log('Fiz');
    } else if (test % 3 == 0) {
      console.log('Buz');
    } else  console.log(`${test}` +' Не делится не на 3 и не на 5');
  }

  Task5();

  function Task6()    {
    let test = prompt("Введите возраст");
    if ((test >16) && (test<18)) {
      console.log('Можешь выкурить сигаретку, только маме не говори');
    }
    if (test <18){
      console.log('Пей колу');
    }else if (test >=18){
      console.log('Попей пивка');
    }
  }

  Task6();
  function Task7()    {
    let test = prompt("Введите какую сторону света вы бы хотели отправиться?");
    switch(test) {
      case 'юг':
        console.log('на юг пойдешь счастье найдешь')
        break;

      case 'север':
        console.log('на север пойдешь много денег найдешь')
        break;
      case 'запад':
        console.log('на запад пойдешь верного друга найдешь')
        break;
      case 'восток':
        console.log('на восток пойдешь разработчиком станешь')
        break;
      default:
        console.log("попробуйте еще раз");
        break;

    }
  }

  Task7();

  function adTask2()    {
    let a = prompt("Введите некое число:");
    let b = prompt("Сколько отнять:");
    let c = prompt ("Сколько прибавить:");
    let d = prompt ("Сколько  умножить:");
    let e = prompt ("Сколько разделить от предыдущего результата:");
    let result = (((a-b)+c) * d) / e;
    alert(`(((${a} - ${b}) + ${c}) * ${d}) / ${e} = ${result}`);
  }
  adTask2()
  function adTask3()    {
    const a = prompt("введите количество ступеней :");
    let result = "";

    for (let i = 0; i < a; i++) {
      result += "#";
      console.log(result);
    }
  }
  adTask3()

}



export const lesson3__practice = () => {
  // const objA = new Object({ value: 1, key1: 'key1' });
  // const objB = { value: 2, key2: 'key2' };
  // const object2 = Object.assign(objB, objA); //

  /*
    { value: 1, key1: 'key1' }
    { value: 2, key2: 'key2' }

    { value: 2, key1: 'key1', key2: 'key2' }
  */

  const shape = {
    activeColor: 'green',
    inActiveColor: 'red',
    warningColor: 'yellow',

    // innerColor: {
    //   highlightColor: 'orange'
    // }
  }
  //
  // const bgColor = shape.isActive ? shape.activeColor : shape.inActiveColor;
  // const bgColor2 = shape['active' + 'Color'];
  //
  // delete shape.width;

  // for (let key in shape) {
  //   console.log(`key: ${key}, value: ${ shape[key] }`)
  // }
  //
  // const array = ['Nikolai', 'Vladimir', 'Grigoriy'];
  // const arrayResult = array.map((value) => {
  //   return 1;
  // })
  //
  // console.log(arrayResult)

  // const string = 'value1, value2, value3';
  // const arrOfValues = string.split(', ').join(', ')

  // const func = () => {
  //   console.log(arguments);
  // }
  //
  // func(1)

  function sayHi(){
    console.log(`Hello ${this?.name}`);
  }

  const user1 = {
    name: 'Bill',
    key: 'test',
    obj: {
      name: 'Antonio',
      key: 'test 1',
      greet2: function sayHi(test){
        console.log(`Hello ${this?.name} test: ${test}`);
      }
    },
    greet: function sayHi(){
      console.log(this);
      console.log(`Hello ${this?.name}`);
    }

  }
  const user2 = {
    name: 'Bob',
    greet: sayHi
  }
  // user1.greet() // Hello Bill
  // user2.greet() // Hello Bob
  // sayHi(); // Hello
  // console.log(user1.obj.greet2())
  // пример ниже эквивалентен записи const greeting = function sayHi(){ console.log(`Hello ${this.name}`) }
  const greeting = user1.obj.greet2.bind(user1).bind(user1);

  greeting() // => console.log(`Hello ${this.name}`)


  const vals = {
    1: 'один',
    2: 'два'
  }

  vals[leftTeamScore]
}

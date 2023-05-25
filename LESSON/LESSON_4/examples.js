export const lesson_4 = () => {

  const someTest = function() {
    return function () {
      return 1111;
    }
  }

  // console.log(someTest())
  const firstExample = () => {
    const user = {
      name: 'Bob',
      funcFunc() {
        // not from here
        return function() {
          console.log(this);
        }
      },
      funcArrow() {
        // get this from here
        return () => {
          console.log(this);
        }
      },
      arrowFunc: () => {
        console.log('test', this)
        return function() {
          console.log(this);
        }
      },
      arrowArrow: () => {
        return () => {
          console.log(this);
        }
      },

      simpleFunc: function () {
        return this;
      },
    };

    // user.simpleFunc()


    // function test() {
    //   console.log(arguments)
    // }
    //
    //
    // test();
  }

  firstExample();


  const arraysExample = () => {
    const array1 = [1, 2, 4, 5, 8, 9, 10];
    const arrayCopy = array1.slice();

    // console.log(arrayCopy)
  }

  const spreadRest = () => {
    const array1 = [1, 2, 4, 5, 8, 9, 10];
    const obj1 = { test1: 'value1', test2: 'value2', obj: { test3: 'value3' } };
    const objCopy = { ...obj1, test1: '1' };
    const { test1: testValue, test2, obj: { test3 } } = obj1;
    const [ value1, value2 ] = array1;
    const user = { age: 19, name: 'Test', gender: 'male', id: 'id', test: '' };
    const func = ({ id, name, ...otherParams }) => {// ([ value1,,,val2, ...restArray ])
      // console.log(id, name, otherParams)
      console.log([
        ...array1.slice(0, 2),
        ...array1.slice(4, 5)
      ])

      const copy = {
        id,
        name: name.toUpperCase(),
        ...otherParams
      }
    }

    func(user);

    /*
    * { test: 'value1', test2: 'value2' } => test: 'value1', test2: 'value2'
    *
    * */
    const arrayCopy = [...array1]; // 1, 2, 4, 5


    // console.log(testValue, value2)
  }


  // const test = [1, 2, 6, 8, 10, 699, 15];
  // const arrayMethods = (array1) => {
  //   const array = [ ...array1]; // 'test value:23'
  //   const testArr = [ 34, 545, 34 ]
  //
  //   // console.log(array.includes(7));
  //   // const someIndex = array.indexOf('asd');
  //   //
  //   // console.log(someIndex > -1 ? array[someIndex] : 'fail' )
  //
  //   // const foundIndex = array.indexOf(8);
  //
  //
  //
  //   // delete array[foundIndex] => [1, 2, 6, undefined, 10, 699, 15]
  //
  //   // console.log(array.join(' ____ '))
  //
  //   console.log([ ...array, ...testArr, ...[1111, 9999] ])
  //
  //   if ('test') console.log('test')
  // }

  // const test1 = () => {
  //   this
  // }

  // arrayMethods(test)

  // const callback = () => {
  //   const func = (val1, val2, callback) => {
  //     let result;
  //
  //     setTimeout(() => {
  //       result = val1 + val2;
  //       callback(result);
  //     }, 2000)
  //
  //     // callback(result);
  //   }
  //
  //   const showInConsole = (result) => {
  //     console.log(result)
  //   }
  //
  //
  //   func(4, 5, showInConsole);
  // }


  const arrayMethods = () => {
    // const array = [4, 6, 8, 2, 0, 17];
    // const arrayOfObj = [ { value: 2 }, { value: 1 } ];
    // const obj = { height1: 52, height2: 60, height3: 44 };

    // const newArray =  Object.values(obj).reduce((last, current, value) => {
    //   console.log(last)
    //   return {
    //     ...last,
    //     [value]: value
    //   }
    // } , {});

    // console.log(newArray)


    // arrayOfObj.sort((a, b) => {
    //   if (a === b) return a;
    //
    //   if (a.value > b.value) {
    //     return a;
    //   } else if (a.value < b.value) {
    //     return b;
    //   }
    // })

    // console.log(array.filter(e => (e % 2) === 0));
    // console.log(array.find((e) => (e % 8) === 0))

    ((e) => { console.log(`value is ${e}`) })(12)


    // console.log(arrayOfObj)
  }


  const constructor = function ({ name, age }) {
    this.name = name;
    this.age = age;
    this.getBMI = () => {
      return this.age + 18;
    }
  }

  const antony = new constructor({ name: 'Antony', age: 18 })

  // console.log(antony.getBMI())

  // arrayMethods();
}

// export default (function() {
//   const val = {}
//
//   // calulation
//
//   return val
// })() // => {}

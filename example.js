export function compareExamples() {
  // const number1 = 1;
  // const number2 = 2;
  // const string1 = '12sds3';
  // const string2 = '12abc3';
  //
  // console.log( 1 >= 1 ) // true
  // console.log( 1 > 1 ) // false
  // console.log( 1 > 2 ) // true
  // console.log( string1 >= string1 ) // true потому что длинна массива равна
  // console.log( string1 < (string2 + 'sd') ) // true
  // console.log( 1 >= 1 ) // true
  //
  // console.log('test' === 'test')
};

export const test = () => {
  function checkAndOperand() {
    const green = 'зеленый';
    const blue = 'синий';
    let test = '';

    console.log(`test : ${true && false && true}`); // либо первый false либо последний true
    console.log('Цвет', green && test && blue) // '' => test
  }

  function checkOrOperand() {
    const green = 'зеленый';
    const blue = 'синий';
    let test = '';

    console.log(`test : ${true || false || true}`); // либо первый false либо последний true
    console.log('Цвет', green || test || blue) // 'зеленый'
    console.log('Еще раз цвет', test || blue || green) // 'синий'


    if (!test) {
      console.log('test is unavailable')
    }
  }

  function checkEqual() {
    const val1 = '2'
    const val2 = 2;

    if (val1 !== val2) {
      console.log('Зашло')
    }
  }

  function doubleQuestion() {
    const val1 = '';
    const val2 = 0;
    const val3 = null;
    const val4 = undefined;

    console.log(val3 ?? val4 ?? val1 ?? val2);
    console.log((Boolean('test') && 34) ? 'первый аргумент' : 'Второй аргумент' ) // 'первый ..';

    // Тернарный оператор выше аналогичная запись через if

    if ((Boolean('test') && 34)) {
      console.log('Первый аргумент')
    } else {
      console.log('Второй аргумент')
    }
  }

  function checkIf() {
    const val1 = 'test';

    if ((val1 === '123') || (val1 === '345')) {
      console.log('Переменная есть')
    } else {
      console.log('Переменная другая')
    }
  }

  function examplesForPreviousLesson() {
    const some = '3.23abc';
    const val1 = parseFloat(some); //=> 3.23
    const val2 = Number(some); //=> NaN
    const test = { length: 9 };

    Number.isNaN(val2) // => true

    if (Array.isArray(test)) {
      console.log('is array')
    }

    if (!Array.isArray(test) && typeof test === 'object') {
      console.log('is object')
    }

    console.log(typeof function() {}) // 'function'
  }

  function falsyValues() {
    // All falsy values
    console.log(Boolean(0))
    console.log(Boolean(NaN))
    console.log(Boolean(''))
    console.log(Boolean(undefined))
    console.log(Boolean(null))
    console.log(Boolean(false))


    if ('') {
      console.log('Не зайдет')
    }

    // True will be all others
  }

  function checkFor() {
    const val1 = ['крайсный','синий','черный','желтый','фиолетовый','белый',];
    let allColors = '';

    for (let i = 0; i < val1.length; i++ ) {
      if (val1[i] === 'черный' || val1[i] === 'белый') {
        continue;
      }

      if ((val1.length - 1) === i) {
        allColors += val1[i];
      } else {
        allColors += val1[i] + ', ';
      }
    }

    console.log(allColors);
  }

  function checkWhile() {
    const containerSize = 5;
    const goodsContainer = [];
    const goods = [ 'Кросовки', 'Майка', 'Перчатки', 'Джинсы', 'Свитер', 'Шапка', 'Туфли', 'Шорты' ]
    let i = 0;

    while (goodsContainer.length < 5) {
      goodsContainer.push(goods[i]);
      i++
    }

    console.log('Container: ', goodsContainer)
  }

  // function test() {
  //   'test'.
  // }

  // test()
}

export default () => {

}

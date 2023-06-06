// let shape1 = {
//   radius: 10,
//   deameter() {
//     return this.radius * 2
//   },
//   perimeter: () => {
//     console.log(this)
//     return 2 * Math.PI * this.radius
//   }
// }
//
// let some = function () {
//   this.name = 'test';
//   this.test = () => {
//     console.log(this);
//   }
// }
//
//
// shape1.perimeter();
// var person = new some()
// shape1[person] = 1; // [object, object]
// console.log(shape1[person])
// person.test();

// export const lesson_5 = () => {
//   const funcExample = () => {
//     const a = {}
//     const b = { key: "b" }
//     const c  = { key: "c" }
//
//     a[b] = 123;
//     a[c] = 456;
//
//     console.log(a[b])
//   }
//
//   const spreadExample = () => {
//     const arr = [{ key1: 'val1' }, { key2: 'val2' }];
//     const defaultConfig = { key3: 'val3', key4: 'val4', plots: [ 2,4,5,6] };
//     const { key3 } = defaultConfig;
//     const chartOptions = { plots: [7, 8, 14, 16, 15, 12] }
//
//     const obj2 = {...defaultConfig, ...chartOptions, plots: [1, 2, 4]}; // => Object.assign(defaultConfig, chartOptions)
//
//     console.log(key3)
//   }
//
//   const hw_7_last = (word = 'recede') => {
//     const count = {};
//     let result = '';
//
//     for (let i = 0; i < word.length; i++) {
//       if (count[word[i]]) {
//         count[word[i]] += 1;
//       } else {
//         count[word[i]] = 1;
//       }
//     }
//
//     for (let i = 0; i < word.length; i++) {
//       if (count[word[i]] > 1) {
//         result += ")"
//       } else {
//         result += "("
//       }
//     }
//
//     return result;
//   }
// }

const array = [1, 'test', {}];
array[10] = 'asda'
const obj = {
  key1: 'test',
  someKey: 'vs',
  method: function() {
    console.log(this);
  }
};
const func = function() {
  console.log(this)
}

func.some = 'test';

// Object => Array => array
// Object => Function => func

console.log(array[0])
console.log(obj.key1)
console.log(obj.method())
func()

const window1 = {
  alert: (message) => { alert(message) },
  main: () => {
    console.log(this)
  }
}

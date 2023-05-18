export default function() {

  var someFunction = () => {
    console.log(1);
  }

  
  function someFunction() {
    console.log(2);
  }


  someFunction();
};

// 1 проходка
// var someFunction = undefined;
// someFunction = func ....


// 2 проходка
// var someFunction = func (console.log(1))

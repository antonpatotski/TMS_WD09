"user strict";

export function homeWork(){

    // Functions


    // Task 1
    function getSum(num){
        let sum = 0; 
        for (let i = 0; i < num + 1; i++){
            sum += i;
        }
        return sum;
    }   
    // console.log(getSum(100));


    // Task 2
    // тоже в кредитах не шарю, но я так понял, что каждый год надо от всей суммы процент начислять
    // П.с - не берите в долг и не давайте в долг С:
    function creditResult(sumCredit){

        const percentInYear = 17; 
        const countYear = 5;
        
        return ((sumCredit / 100 * percentInYear ) * countYear) + sumCredit;
    }
    // console.log(creditResult(5000));
    

    // Task 3
    function trimString(str,from,to){

        return (from < 0 || to < 0 || from >= str.length || to >= str.length || from > to) ? "Try again C:" : str.slice(from,to);
        
    }
    // console.log(trimString("Hi",3,6));
    // console.log(trimString("Hello world",3,6));


    // Task4
    function getSumNumbers(num){
        let sum = 0;
        num = String(num).split("");
        num.forEach(function(e){
            sum += Number(e)
        });
        return sum;
    }

    // console.log(getSumNumbers(101));


    // Task 5
    function getSum(a,b){
        let result = 0;
        if (!Number.isInteger(a) && !Number.isInteger(b) || (a > b)){
            result = "try again";
        }
        else if ( a == b){
            result = a;
        }
        else{
            for (let i = a; i < b; i++){
                result += i;
            }
            result += b;
        }
        return result; 

    }
    // console.log(getSum(1,2));


    // Task6
    function foo(){
        console.log("foo");
    }
    
    function boo(){
        console.log("boo");
    }

    function fooboo(a,foo,boo)
    {   
        
        (typeof a === "boolean")? ((a)?console.log("1"):console.log("2")): console.log("try again");
    }
    // fooboo(f,foo,boo);

    // Task 1 ADVANCED
    function advancedTask(a,b,c){
        return !(a + b <= c || a + c <= b || b + c <= a) ?? true  
    }
    // console.log(advancedTask(3,3,3));

    // Task 2 ADVANCED
    function chocoBreak(n,m){     
       return (n > 0 || m > 0) ? n * m - 1 : 0;        
    }
    // console.log(chocoBreak(10,2));

    // Task 3 ADVANCED
    // --undifinded-- я не хочу доделаывать эту задачу, т.к она скучная и в ней ничего нового.-.
    const tax = 20;
    const phonePrice = 550;
    const phoneAccessory = 30;
    let money = 3000;

    function moneyDestroyer(){
        const oncePay = (phonePrice + phoneAccessory) + (phonePrice + phoneAccessory) / 100 * tax;
        let countGoods = 1;
        let purchaseAmount = 0;
        while((money - oncePay) > 0){       
            money -= oncePay;
            purchaseAmount += oncePay;
            countGoods += 1;        
        }
        console.log(`U can purchase is ${countGoods} phones with accessories.
                    Purchase amount is ${purchaseAmount}.
                    U will have ${money} $ left`);       
    
    }

    // moneyDestroyer();
    

    // Objects

    // Task 1
    const obj = {
        name: "Lev",
        age: 27,
    }

    // console.log(obj.name);
    // delete obj.name;
    // console.log(obj.name);

    // Task 2 
    const objTwo = {
        name: "banana",
        size: 30,
    }
    // console.log(objTwo.name? true : false);

    // Taks 3
    const student = {
        name: "Jhon",
        age: 19,
        isHappy: true,
    }
    // непонятно зачем по очереди надо вывести, почему нельзя сразу ٩(˘◡˘)۶
    // for(let key in student){
    //     console.log(`${key}`)
    // }
    // for(let key in student){
    //     console.log(`${student[key]}`)
    // }
    

    // Task 4
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };
    
    // ты на разборе дз сказал, что на месте рум пум пум должно быть что угодно,
    // но я думаю, что тут ключевое именно в то, что название обьекта выведено строкой,
    // по этмоу я сделаю так как написано в задании, ведь упраженение на for in выше было ʕ•́ᴥ•̀ʔっ
 

    // console.log(colors['ru pum pu ru rum'].red, "и", colors['ru pum pu ru rum'].blue);

    // Task 5
    const salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    }

    let averageSalary = 0;
    let sum = 0;

    // for (let key in salaries){
    //      sum += salaries[key];
    // }

    // averageSalary = sum / Object.keys(salaries).length;
    // console.log(averageSalary);


    // Task 6
    const registerProperty = {
        login: "",
        pass: "",
   

        validate: function(login,pass){
            (login === this.login && pass === this.pass) ? alert("all right"):alert("try again");        
        },
    }

   
    // registerProperty.login = prompt("write new login");
    // registerProperty.pass = prompt("write new pass");

    // const login = prompt("write ur login");
    // const pass = prompt("wirte ur pass");

    // registerProperty.validate(login,pass);

    // Task 1 ADVANCED
    // не больше 9 мячей, пинять формат 2:2 , вывести в консоль словами,
    function sayScore(strScore){
        let scoreArr = strScore.split(":");
        const strArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];

        return ( scoreArr[0] > 9 || scoreArr[1] > 9 || scoreArr[0] < 0 || scoreArr[1] < 0)?         
        ("try again"):`${strArr[Number(scoreArr[0])]} vs ${strArr[Number(scoreArr[1])]}`;
        
    }

    // console.log(sayScore("1:4"));

    // Task 2 ADVANCED

    const student1 = {
        name: 'Polina',
        age: 27,
    }

    const student2 = {
        name: 'Polina',
        age: 27,
        
    }

    function isEqual(obj1,obj2){

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length){
            return false
        }

        for (let key in obj1){       
            if(obj1[key] !== obj2[key]){
                return false;
            }
        }
        
        return true;
    
    }

    // console.log(isEqual(student1,student2));

    // Task 3 ADVANCED 
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
    
    // console.log(animals?.bird?.name);
    

    





}
export function home4(){
    //constant
    const myObject = {
        key1: "value1",
        key2: "value2"
    };

    const objectTask2={
        key1: "value",
        key2:"value2"
    };

    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    };

    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };

    const user = {};

    //endConstant

    //functions
    function getSum(number) {
        let sum = 0;

        for (let i = 0; i <= number; i++) {
            sum += i;
        }

        return sum;
    }
    function calculateInterest(loanAmount) {
        const interestRate = 0.17;
        const years = 5;

        const totalInterest = loanAmount * interestRate * years;

        return totalInterest;
    }

    function trimString(str, from, to) {
        return str.slice(from, to + 1);
    }

    function getSum(a, b) {
        if (a === b) {
            return a;
        }

        let sum = 0;
        const start = Math.min(a, b);
        const end = Math.max(a, b);

        for (let i = start; i <= end; i++) {
            sum += i;
        }

        return sum;
    }

    function fooboo (checkName,foo,boo)
    {
        const result = checkName?foo():boo();

    }

    function foo() {
        console.log("foo");
    }

    function boo() {
        console.log("boo");
    }

    function validateLoginAndPassword(login, password) {
        if (!login || !password) {
            return false;
        }

        if (login.length < 6 || password.length < 6) {
            return false;
        }

        return true;
    }
    //endFunctions

    let chose = prompt("Введите номер задания");
    switch (chose)
    {
        case 1:
        {
            const result = getSum(100);
            console.log(result);
            break;
        }
        case 2:
        {
            const loanAmount = 10000;
            const interest = calculateInterest(loanAmount);
            console.log(interest);
            break;
        }
        case 3:
        {
            const inputString = "Hello, world!";
            const trimmedString = trimString(inputString, 7, 11);
            console.log(trimmedString);
            break;
        }
        case 4:
        {
            console.log(getSum(-1, 2));
            break;
        }
        case 5:
        {
            fooboo(true, foo, boo);
            break;
        }

        //startHw2
        case 6:
        {
            console.log(myObject);

            delete myObject.key1;
            delete myObject.key2;

            console.log(myObject);
            break;
        }
        case 7:
        {
            if(objectTask2.key1=="value")
            {
                console.log(true);
            }
            else
            {
                console.log(false);
            }
            break;
        }
        case 8:
        {
            console.log("Keys:");
            for (let key in student) {
                console.log(key);
            }

            console.log("Values:");
            for (let key in student) {
                console.log(student[key]);
            }

            break;
        }
        case 9:
        {
            console.log(colors["ru pum pu ru rum"].red + " " + colors["ru pum pu ru rum"].blue);
            break;
        }
        case 10:
        {
            let salaries = {
                andrey: 500,
                sveta: 413,
                anton: 987,
                roma: 664,
                alexandra: 199
            };

            let sum = 0;
            let count = 0;

            for (let employee in salaries) {
                sum += salaries[employee];
                count++;
            }

            const averageSalary = sum / count;

            console.log(averageSalary);

            break;
        }
        case 11:
        {
            const login = prompt("Введите логин:");
            const password = prompt("Введите пароль:");

            if (validateLoginAndPassword(login, password)) {
                user.login = login;
                user.password = password;

                const confirmationLogin = prompt("Подтвердите логин:");
                const confirmationPassword = prompt("Подтвердите пароль:");

                if (
                    confirmationLogin === user.login &&
                    confirmationPassword === user.password
                ) {
                    console.log("Добро пожаловать!");
                } else {
                    console.log("Неправильный логин или пароль.");
                }
            } else {
                console.log("Некорректный логин или пароль.");
            }

            break;
        }
    }

}
"user strict";

export function homeWork(){

    function Task1()
    {
        const a = "true";
        const b = false;
        const c = 17;
        const d = undefined;
        const e = null;
    
        console.log(typeof(a));
        console.log(typeof(b));
        console.log(typeof(c));
        console.log(typeof(d));
        console.log(typeof(e));
    }

    // Task1();

    function Task2()
    {
        const height = 15;
        const width = 20;

        if (height === width)
        {
            console.log("fig");
        }
        else if (height > width)
        {
            console.log(height);
        }
        else
        {
             console.log(width);
        }
    }

    // Task2();
    

    function Task3()
    {

        for(let i = 0; i < 20; i++)
        {   
            if(i % 3 === 0 && i !== 0)
            {
                console.log(i);  
            }
        } 
    }
    
    // Task3();

    function Task4()
    {
       let key = true;
       let documents = true;
       let pen = true;
       let apple = false;
       let orange = true;
       let shouldGoToWork = "";

       ((key && documents && pen)&&(apple || orange)) ? 
            shouldGoToWork = "yes": 
            shouldGoToWork = "nope";

       console.log(shouldGoToWork);
       
    }

    // Task4();

    function Task5()
    {
        let userNumber = prompt("write some number");

        if ( userNumber % 5 === 0 && userNumber % 3 === 0)
        {
            console.log("FizBuz")
        }
        else if (userNumber % 5 === 0)
        {
            console.log("Fiz");
        }
        else if (userNumber % 3 === 0)
        {
            console.log("Buz");
        }
  
    }

    // Task5();

    function Task6()
    {
        let userAge = prompt("write your age");

        if (userAge > 18)
        {
            console.log("Go drink beer");
        }
        else if (userAge >= 16 && userAge <= 18)
        {
            console.log("Go smoke, but don't tell it your mom");
        }
        else
        {
            console.log("Go drink 'cola'");
        }
    }

    // Task6();

    function Task7()
    {
        let userTravel = prompt("Type N, W, E or S");
        userTravel = userTravel.toLowerCase();
        switch (userTravel)
        {
            case "n":
                console.log("u will find a lot of money");
                break;
            case "w":
                console.log("u will find a true friend");
                break;
            case "e":
                console.log("u will be a developer");
                break;
            case "s":
                console.log("u will be happy");
                break;
            default:
                console.log("try again");
                break;
        }
    }

    // Task7();

    function advancedTask1()
    {   
        // let userName = prompt("Write ur frst and last names through 'SPACE' btn:");
        let userName = "sbuDabu BabaEzae";
        let alertUserName = "";

        userName = userName.toLowerCase();

        let userNameSplit = userName.split(" ");
        
  
        for(let i = 0; i < userNameSplit.length; i++)
        {   
            if(userNameSplit.length - 1 === i)
            {          
                alertUserName += userNameSplit[i][0].toUpperCase() + userNameSplit[i].slice(1);
            }
            else
            {
                alertUserName += userNameSplit[i][0].toUpperCase() + userNameSplit[i].slice(1) + " ";
            }
           
            
        }
        alert(`Hello, ${alertUserName}!`);
        
    }

    // advancedTask1();

    function advancedTask2()
    {
        let frstNum = prompt("Write some number:");
        let subNum = prompt("How much to subtract:");
        let sumNum = prompt ("How much to add:");
        let mltpNum = prompt ("How much to multiply:");
        let dvdNum = prompt ("How much to divide:");
        let result = ((frstNum-subNum)+sumNum) * mltpNum / dvdNum;  
        alert(`((${frstNum} - ${subNum}) + ${sumNum}) * ${mltpNum} / ${dvdNum} = ${result}`);   
    }

    // advancedTask2();

    function advancedTask3()
    {
        let rowCount = prompt("Enter the number of lines:");
        let grid = "";

        for (let i = 0; i < rowCount; i++)
        {   
            grid += "#";
            console.log(grid);
        }
    }

    // advancedTask3();

}
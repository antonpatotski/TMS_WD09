export function home5() {
    //constants
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
    const word = 'топот';
    //endConstants

    //functions
    function formatUserDeclaration(name, index) {
        return `member ${index + 1}: ${name}`;
    }

    function isPalindrome(word) {
        const cleanedWord = word.toLowerCase().replace(/\s/g, '');
        const length = cleanedWord.length;

        for (let i = 0; i < length / 2; i++) {
            if (cleanedWord[i] !== cleanedWord[length - 1 - i]) {
                return false;
            }
        }

        return true;
    }
    //endFunctions

    let chose =2;
    switch (chose)
    {
        case 1: //Выведи все элементы массива в консоль с помощью метода **`forEach`**
        {
            fibonacci.forEach(function (element){console.log(element);});
            break;
        }
        case 2: //Используя метод **`map`** создайте новый массив, на основе массива **`users`**, в котором каждый элемент массива будет содержать строку вида:
        {
            const formattedUsersDeclaration = users.map(formatUserDeclaration);
            console.log(formattedUsersDeclaration);
            const formatUserArrow = (name, index) => `member ${index + 1}: ${name}`;
            const formattedUsersArrow = users.map(formatUserArrow);
            console.log(formattedUsersArrow);
            break;
        }
        case 3: //Используя метод **`reduce`** получите сумму всех чисел массива.
        {
            const sum = fibonacci.reduce(function(acc, current) {
                return acc + current;
            }, 0);

            console.log(sum);
            break;
        }
        case 4: //Используя метод **`find`** найдите в массиве первое четное число.
        {
            const firstEvenNumber = numbers.find(function(number) {
                return number % 2 === 0;
            });

            console.log(firstEvenNumber);
            break;
        }
        case 5:
        {
            console.log(isPalindrome(word));
            break;
        }
    }
}
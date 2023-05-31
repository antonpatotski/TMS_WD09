export function homework_2() {

// 1. Создайте переменные и присвойте им значения, Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

    let var1 = 'true'
    let var2 = false
    let var3 = 17
    let var4 = undefined
    let var5 = null

    console.log(typeof var1)
    console.log(typeof var2)
    console.log(typeof var3)
    console.log(typeof var4)
    console.log(typeof var5)


// 2. Даны две переменные
// > С помощью условий выведите в консоль разработчика наибольшее число.

    let height = 15
    let width = 20
    width > height ? console.log(width) : console.log(height);

//3. Написать перебор от 1 до 20, где выведутся все числа кратные трём.

        for (let i = 1; i <= 20; i++){
            if (i % 3 === 0){
                console.log(i)
            }
        }

    //4. Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
    // Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин.
    // Для решения этой задачи нам помогут логические операторы **`|| &&`**.

        let key = true
        let documents = true
        let pen = true
        let apple = false
        let orange = true
        let shouldGoToWork = key && documents && pen && (apple || orange)
        if (shouldGoToWork){
            console.log('Go to work')
        } else{
            console.log('You forgot something')
        }
    //5. Запросить у пользователя число:
    //
    //     1. Если число делится без остатка на 5 выводим сообщение Fiz
    //     2. Если число делится без остатка на 3 выводим сообшение Buz
    //     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz
    let number = prompt('Enter number')
    if (number % 5 === 0){
        console.log('Fiz')
    } else if (number % 3 === 0){
        console.log('Buz')
    } else if (number % 5 === 0 && number % 3 === 0){
        console.log('FizBuz')
    }
    //6. Написать программу, которая выполняет следующие операции:
    //
    // - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`.
    // - Если меньше, то выводит сообщение - `Пей колу`.
    // - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.

    let age = prompt('How old are you?')
    if (age >= 18){
        console.log('Попей пивка!')
    } else if (age <= 18 && age >= 16){
        console.log('Можешь выкурить сигаретку, только маме не говори')
    } else {
        console.log('Пей колу')
    }
    //7. Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться.
    // После ввода данных мы должны вывести в консоль сообщение из списка.
    // Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

    let side = prompt ('В какую сторону пойдёшь?').toLowerCase()
    switch (side) {
        case 'юг':
            console.log('на юг пойдешь счастье найдешь')
            break
        case 'север':
            console.log('на север пойдешь много денег найдешь')
            break
        case 'запад':
            console.log('на запад пойдешь верного друга найдешь')
            break
        case 'восток':
            console.log('на восток пойдешь разработчиком станешь')
            break
        default:
            console.log('Ошибка. Попробуйте ещё раз')
    }
}



export function home6() {
    const container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);

    const cont = document.createElement("div");
    cont.id="cont";
    container.appendChild(cont);

    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteButton";
    deleteButton.textContent = "Delete All";
    cont.appendChild(deleteButton);


    const enterTodo = document.createElement("input");
    enterTodo.id = "inputTodo";
    enterTodo.value = "Enter todo.."

    cont.appendChild(enterTodo);

    const addButton = document.createElement("button");
    addButton.id="addButton";
    addButton.textContent = "Add";

    cont.appendChild(addButton)

    const borderFirst = document.createElement("div");
    borderFirst.classList.add("borderFirst");
    cont.appendChild(borderFirst);

    const buttonCheck = document.createElement("button");
    buttonCheck.id="buttonCheck";
    buttonCheck.textContent="✓"
    borderFirst.appendChild(buttonCheck);

    const todoText = document.createElement("input");
    todoText.id="todoText";
    todoText.value = "Todo text"
    borderFirst.appendChild(todoText);

    const date = document.createElement("input");
    date.id="date";
    date.value = "Date"
    borderFirst.appendChild(date);

    const buttonCancel = document.createElement("button");
    buttonCancel.id="buttonCancel";
    buttonCancel.textContent="X"
    borderFirst.appendChild(buttonCancel);



    const borderSecond = document.createElement("div");
    borderSecond.classList.add("borderFirst");
    cont.appendChild(borderSecond);

    const buttonCheck2 = document.createElement("button");
    buttonCheck2.id="buttonCheck";
    buttonCheck2.textContent="✓"
    borderSecond.appendChild(buttonCheck2);

    const todoText2 = document.createElement("input");
    todoText2.id="todoText";
    todoText2.value = "Todo text"
    borderSecond.appendChild(todoText2);

    const date2 = document.createElement("input");
    date2.id="date";
    date2.value = "Date"
    borderSecond.appendChild(date2);

    const buttonCancel2 = document.createElement("button");
    buttonCancel2.id="buttonCancel";
    buttonCancel2.textContent="X"
    borderSecond.appendChild(buttonCancel2);

    addButton.addEventListener('click',function (){
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);
    })
















}
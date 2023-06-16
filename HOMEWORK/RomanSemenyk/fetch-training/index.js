function getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => printTodos(data))
        .catch(error => console.log(error));
}

function printTodos(todos) {
    const ul = document.createElement('ul');

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.id + ' ' + todo.title;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

getTodos();

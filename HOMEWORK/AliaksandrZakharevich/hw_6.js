import styles from './AliaksandrZakharevich.scss'

export const homework_6 = () => {
    const hw_6 = document.querySelector('#FOR_HOMEWORK');
    let todoArray = [];
    let countCompetedTodo = 0;

    const createNode = ({nodeName, nodeAttributes, nodeClassName, nodeInnerText}) => {
        const currentNode = document.createElement(nodeName);
        if (nodeAttributes) {
            currentNode.setAttribute(nodeAttributes.key, nodeAttributes.value);
        }
        if (nodeClassName) {
            for (let className of nodeClassName) {
                currentNode.className += ` ${className}`;
            }
        }
        if (nodeInnerText) {
            currentNode.innerText = nodeInnerText;
        }
        return currentNode;
    }

    const innerHTML = () => {
        hw_6.innerHTML = `
            <div class="container col-8 p-2 AZ-lightgrey AZ-br-10 main">
              <div class="row align-items-center m-3">
                <div class="col">
                  <button class="btn btn-primary AZ-w-100" id="btnDeleteAll">Delete All</button>
                </div>
                <div class="col">
                  <button class="btn btn-primary AZ-w-100" id="btnDeleteLast">Delete Last</button>
                </div>
                <div class="col-6">
                  <input type="text" id="inputEnter" class="p-2 text-center AZ-input" placeholder="Enter todo...">
                </div>
                <div class="col">
                  <button class="btn btn-primary AZ-w-100" id="btnAdd">Add</button>
                </div>
              </div>

              <div class="row align-items-center m-3">
                <div class="col-auto">
                  <label class="col-form-label" id="labelAll">All:0</label>
                </div>
                <div class="col-auto">
                  <label class="col-form-label" id="labelCompleted">Completed:0</label>
                </div>
                <div class="col">
                  <button class="btn btn-primary AZ-w-100" id="showAll">Show All</button>
                </div>
                <div class="col">
                  <button class="btn btn-primary AZ-w-100" id="showComplete">Show Completed</button>
                </div>
                <div class="col">
                  <input type="text" id="inputSearch" class="p-2 text-center AZ-input" placeholder="Search...">
                </div>
              </div>
            </div>
        `
    }

     const pushTodoList = () =>{
        const main = document.querySelector('.main');
        if(todoArray.length > 0) {
            for (let i = todoArray.length-1; i < todoArray.length; i++) {
            const div = createNode({nodeName: 'div', nodeClassName: ['row', 'p-2']})
                div.innerHTML = `
                  <div class="container col-8 p-2 mb-3 AZ-list-container todo${i}">
                    <div class="row align-items-center">
                      <div class="col-auto">
                        <button type="button" class="btn btn-primary AZ-btn-p AZ-btn-m-left" id="btnCompleteTodo${i}" data-bs-toggle="button">&#10003;</button>
                      </div>
                      <div class="col">
                        <label class="d-block p-3 text-center AZ-input" id="labelTodo${i}">Search...</label>
                      </div>
                      <div class="col-auto">
                        <button type="button" class="btn btn-primary d-block AZ-btn-p AZ-btn-m-rigth" id="btnDeleteTodo${i}">&#10005;</button>
                        <label class="col-form-label d-block AZ-date-container" id="dateTodo${i}">data</label>
                      </div>
                    </div>
                  </div>
            `;
                main.append(div);
                const label = document.querySelector(`#labelTodo${i}`);
                const data = document.querySelector(`#dateTodo${i}`);
                const checkBtn = document.querySelector(`#btnCompleteTodo${i}`);
                label.textContent = todoArray[i].todoTheme;
                data.textContent = todoArray[i].data;
                checkBtn.onclick = completeTodo;
                // const btnDeleteTodo = document.querySelector(`.btnDeleteTodo${i}`);
                // btnDeleteTodo.onclick = deleteTodo;
            }
            countTodo();
        }
    }

    const addTodo = () =>{
        let todoName = document.querySelector('#inputEnter');
        if(todoName.value){
            const data = new Date().toLocaleString();
            todoArray.push({todoTheme: `${todoName.value}`, data: data, isCompleted: false})
            pushTodoList();
        }
    }

    const deleteAllTodo = () =>{
        const allTodo = todoArray.length;
        for (let i = 0; i<allTodo; i++) {
            deleteLastTodo();
        }
    }
    // const deleteTodo = (e) =>{
    //     let id = e.target.id;
    //     console.log(id);
    //     deleteLastTodo(e, id[id.length-1])
    // }

    const deleteLastTodo = (e, num = todoArray.length-1) =>{
        const lastTodo = document.querySelector(`.todo${num}`);
        lastTodo.remove();
        if(todoArray[num].isCompleted){
            isCompleted(num);
        }
        todoArray.splice(num, 1);
        countTodo();
    }

    const completeTodo = (e) =>{
        const checkBtn = e.target;
        const todo = document.querySelector(`.todo${checkBtn.id[checkBtn.id.length-1]}`)

        if(checkBtn.classList.contains('active')){
            todo.classList.toggle('AZ-darkgrey');
            isCompleted(checkBtn.id[checkBtn.id.length-1])
        } else {
            todo.classList.toggle('AZ-darkgrey');
            isCompleted(checkBtn.id[checkBtn.id.length-1])
        }
    }
    const countTodo = () =>{
        const labelAllTodo = document.querySelector('#labelAll');
        labelAllTodo.textContent = 'All: ' + todoArray.length;
    }
    const countCompleteTodo = () =>{
        const completedTodo = document.querySelector('#labelCompleted');
        completedTodo.textContent = 'Completed: ' + countCompetedTodo;
    }

    const isCompleted = (index)=>{
        const elem = todoArray[index];
        elem.isCompleted ? countCompetedTodo-- : countCompetedTodo++;
        elem.isCompleted = !elem.isCompleted;
        countCompleteTodo()
    }

    innerHTML();

    const btnAdd = document.querySelector('#btnAdd');
    btnAdd.onclick = addTodo;
    const btnDeleteAll = document.querySelector('#btnDeleteAll');
    btnDeleteAll.onclick = deleteAllTodo;
    const btnDeleteLast = document.querySelector('#btnDeleteLast');
    btnDeleteLast.onclick = deleteLastTodo;
}
class TodoItem {
    constructor (id, header, descr, done) {
        this.id = id;
        this.header = header;
        this.descr = descr;
        this.done = done;
    }
}

class TodoList {
    constructor () {
    }

    items = [];

    completeAll() {
        this.items.forEach(elem => elem.done = true); 
    }

    add() {
        const id = +prompt('Введите id задачи', '');
        const header = prompt('Введите заголовок задачи', '');
        const descr = prompt('Введите описание задачи', '');
        let done = prompt('Задача выполнена? (да, нет)', '');
            if (done === 'да') {
                done = true;
            } else {
                done = false;
            }

        const item = new TodoItem (id, header, descr, done)
        this.items.push(item);
    }
}

const list = new TodoList;
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const todoList = document.querySelector('.todoItemList')
let id = 0;

function displayNewTodo (inpValue, id) {
    todoList.insertAdjacentHTML('afterbegin', `
    <li>
        <label for=${id}>${inpValue}</label>
        <input id=${id} type="checkbox">
    </li>
    `)
}

btn.addEventListener('click', () => {
    if (input.value !== '') {
        const item = new TodoItem (id, input.value, input.value, done = false);
        list.items.push(item);
        displayNewTodo(input.value, id);
        id++;
        input.value ='';
    }
})

todoList.addEventListener('change', (e) => {
    if (e.target.tagName === 'INPUT') {
        const label = document.querySelector('label[for="' + e.target.id + '"]');
        label.classList.toggle('crossout');
        if (e.target.checked) {
            list.items[e.target.id].done = true;
        } else {
            list.items[e.target.id].done = false;
        }
    }
})
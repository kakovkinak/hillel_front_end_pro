class TodoItem {
    constructor (firstName, lastName, age, done) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
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
        const firstName = +prompt('Введите Имя', '');
        const lastName = prompt('Введите Фамилию', '');
        const age = prompt('Введите возраст', '');
        let done = prompt('Задача выполнена? (да, нет)', '');
            if (done === 'да') {
                done = true;
            } else {
                done = false;
            }

        const item = new TodoItem (firstName, lastName, age, done)
        this.items.push(item);
    }
}

const list1 = new TodoList;
list1.add();
list1.add();
list1.add();

console.log(list1.items);
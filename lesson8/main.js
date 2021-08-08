const person = {
    _name: 'Kate',
    _age: 21,
    _gender: 'female',
    validGenders: ["male","female","non-binary","transgender","Intersex", "n/a"],
    get name() {
        return this._name;
    },
    get age() {
        return this._age;
    },
    get gender() {
        return this._gender;
    },
    set name(value) {
        this._name = value;
        },
    set age(value) {
        if (value <= 0 || value > 120) {
            alert("Возраст не возможен!");
            return;
        }
        this._age = value;
        },
    set gender(value) {
        if (!person.validGenders.includes(value)) {
            alert("Нет такого пола!");
            return;
        }
        this._gender = value;
        }
};
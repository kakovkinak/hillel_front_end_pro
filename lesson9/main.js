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
        Object.defineProperty(this, '_name', {writable: true});
        this._name = value;
        Object.defineProperty(this, '_name', {writable: false});
        },
    set age(value) {
        if (value <= 0 || value > 120) {
            return;
        }
        Object.defineProperty(this, '_age', {writable: true});
        this._age = value;
        Object.defineProperty(this, '_age', {writable: false});
        },
    set gender(value) {
        if (!person.validGenders.includes(value)) {
            return;
        }
        Object.defineProperty(this, '_gender', {writable: true});
        this._gender = value;
        Object.defineProperty(this, '_gender', {writable: false});
        }
};

Object.defineProperties(person, {
    _name: {enumerable: false, writable: false},
    _age: {enumerable: false, writable: false},
    _gender: {enumerable: false, writable: false}
});

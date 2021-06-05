alert("Hello");
const name = prompt("What is your name?"),
    age = prompt("How old are you?");

if (isNaN(age)) {
    alert("Enter age in numbers");
}
    else{
    alert(`Hello ${name}, Your age ${age}`);
}
console.log(name,age);


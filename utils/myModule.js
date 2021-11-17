function helloClass() {
    return 'Good morning. Please put sonic emoji in Slack.'
}

function goodbyeClass() {
    return 'Good bye. Please put sonic emoji in Slack.'
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

const person = {
    name: "John Doe",
    age: 39,
    foods: ['burgers', 'fries'],
    car: {
        name: 'Tesla',
        model: 'Model S',
        year: 2020
    }
}
// run this function
// console.log(helloClass());

// *** how would we run this function ****
// console log it
// node index.js
// npm run start
// link inside of index

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age
        this.introduction = function () {
            return 'Hi';
        }
    }
}

// export the function
module.exports = {
    hello: helloClass,
    goodbye: goodbyeClass,
    add: addNumbers,
    human: Human,
    person
}
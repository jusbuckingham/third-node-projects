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
    name: "Blank Man",
    age: 29,
    foods: ['sushi', 'fries'],
    car: {
        name: 'ford',
        model: 'f150',
        year: 1990
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
            return 'sup!';
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
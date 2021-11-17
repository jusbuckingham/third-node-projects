const numbers = [1,2,4,6,22,34];
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
console.log(numbers);
console.log(person.foods);


const somethingElse = require('./utils/myModule');

console.log(somethingElse); // object, 

somethingElse.hello(); // {string}
console.log(somethingElse.hello()); // => "Good morning. Please put sonic emoji in Slack."

const sei1025 = [
    "Bloo00",
    "bradyhaa",
    "chenmichael2",
    "cspdevs000",
    "DazingPluto",
    "DevynMalone",
    "jusbuckingham",
    "justinluu8235",
    "kawaharm",
    "kyleisme14",
    "mekeltensley",
    "Mikalai19",
    "nneofotistos",
    "onticinc",
    "Palme412",
    "pambonian",
    "RolandYambao",
    "SGsouthard",
    "sterlingeide",
];

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});

const http = require('http');

// http.createServer((req, res) => { 
//    res.write('Goodbye, World!');
//    res.end();
// })
// .listen(8000);

const faker = require('faker');

let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(randomAddress);

// import the module
const axios = require('axios'); // allows to make API calls and retrieve data...

// There is a function that exist on the frontend that allows us to retrieve data. What function? - fetch

axios.get('https://api.github.com/users/justinluu8235')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});
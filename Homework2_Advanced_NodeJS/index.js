var personeOne = {
    name: "Ana",
    age: 30,
    gender: 'female'
};
var personeTwo = {
    name: "Tom",
    age: 37,
    gender: "male"
};
var personThree = {
    name: 'Sandy',
    age: 26,
    gender: "female"
};
var arrayOfPeople = [personeOne, personeTwo, personThree];
var filterByProperty = function (people, property, value) {
    if (property === 'gender') {
        var filter = people.filter(function (person) { return person.gender === value; });
        return filter;
    }
    else if (property === 'age') {
        var filter = people.filter(function (person) { return person.age === value; });
        return filter;
    }
    else {
        return {};
    }
};
console.log(filterByProperty(arrayOfPeople, 'gender', 'male'));
console.log(filterByProperty(arrayOfPeople, 'age', 26));
// Exercise: Filter an array of objects
// Create interface Person that will have the following properties
// name which is string, age which is number and gender which is 'male' or 'female'.
// Create a function named filterByProperty. The function should accept three parameters
// people => which is array of Person objects
// property => which is string
// value => which is string
// So if we invoke the function filterByProperty as filterByProperty(peopleArray, "gender", "male") it should return the objects of the peopleArray that its gender is male
// So if we invoke the function filterByProperty as filterByProperty(peopleArray, "age", 30) it should return the objects of the peopleArray that its age is 30.

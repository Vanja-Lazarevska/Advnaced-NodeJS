
interface Person {
    name: string,
    age: number,
    gender: "male" | "female"
}

const personeOne : Person = {
    name: "Ana",
    age: 30,
    gender: 'female'
}

const personeTwo: Person = {
    name: "Tom",
    age: 37,
    gender: "male"
}

const personThree: Person = {
    name: 'Sandy',
    age: 26,
    gender: "female" 
}

const arrayOfPeople: Person[] = [personeOne, personeTwo, personThree]


const filterByProperty = (people: Person[], property:string, value: string):object => {
    if(property === 'gender'){
        const filter = people.filter(person => person.gender === value)
        return filter
    }  else if(property === 'age'){
        const filter = people.filter(person => person.age === parseInt(value))
        return filter
    }  else {
        return {}
    }
} 

// const filterByProperty = (people: Person[], property:string, value: string | number):object => {
//     if(property === 'gender'){
//         const filter = people.filter(person => person.gender === value)
//         return filter
//     }  else if(property === 'age'){
//         const filter = people.filter(person => person.age === value)
//         return filter
//     }  else {
//         return {}
//     }
// } 


console.log(filterByProperty(arrayOfPeople, 'gender', 'male'))
console.log(filterByProperty(arrayOfPeople, 'gender', 'female'))
console.log(filterByProperty(arrayOfPeople, 'age', '26'))
// console.log(filterByProperty(arrayOfPeople, 'age', 26))




// Exercise: Filter an array of objects
// Create interface Person that will have the following properties
// name which is string, age which is number and gender which is 'male' or 'female'.
// Create a function named filterByProperty. The function should accept three parameters
// people => which is array of Person objects
// property => which is string
// value => which is string
// So if we invoke the function filterByProperty as filterByProperty(peopleArray, "gender", "male") it should return the objects of the peopleArray that its gender is male
// So if we invoke the function filterByProperty as filterByProperty(peopleArray, "age", 30) it should return the objects of the peopleArray that its age is 30.
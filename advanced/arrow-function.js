const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}
console.log(square(5))

const people = [{
    name: 'Ender',
    age: 25
}, {
    name: 'Enrique',
    age: 32
}, {
    name: 'Oscar',
    age: 26
}]

const under30 = people.filter( (person) => person.age < 30 )

const under30Long = people.filter(function (person) {
    return person.age < 30
})

console.log(under30)

const age25 = people.find( (person) => person.age === 25)

console.log(age25)
let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

console.log(square(3))
console.log(square(10))

let convertFahrenheitToCelsius = function (fahrenheit) {
    return ((fahrenheit - 32) * (5/9))
}

console.log(convertFahrenheitToCelsius(32) + ' F')
console.log(convertFahrenheitToCelsius(68) + ' F')

let getTip = function(total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${(total * tipPercent)}`
}

let tip = getTip(40, undefined)
console.log(tip)

let name = 'Ender'
console.log(`Hey, my name is ${name}!`)
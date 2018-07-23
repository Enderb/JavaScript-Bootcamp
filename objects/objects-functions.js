let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(getSummary(myBook).summary)
console.log(getSummary(otherBook).pageCountSummary)

let convertFahrenheit = function(temp) {
    return {
        F: temp,
        C: (temp - 32) * (5/9),
        K: ((temp - 32) * (5/9)) + 273.15
    }
}

let Fah = 32
let conv = convertFahrenheit(Fah)

console.log(`Fahrenheit: ${conv.F}`)
console.log(`Celsius: ${conv.C}`)
console.log(`Kelvin: ${conv.K}`)
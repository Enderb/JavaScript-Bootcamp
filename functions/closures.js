const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a+b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

const createTipper = (base) => {
    return (bill) => {
        return base*bill
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.20)

console.log(tip15(100))
console.log(tip20(100))
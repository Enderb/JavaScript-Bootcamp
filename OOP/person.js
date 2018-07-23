// Prototype Inheritance
// myClass --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        const bio = `${this.firstName} is ${this.age}`;
        this.likes.forEach((like) => {
            bio += `${this.firstName} likes ${like}`;
        });
        return bio;
    }
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class`
    }

    updateGrade(change) {
        this.grade += change
    }
}

const myStudent = new Student('Ender', 'Barillas', '25', 80)

console.log(myStudent.getBio())
myStudent.updateGrade(-20)
console.log(myStudent.getBio())
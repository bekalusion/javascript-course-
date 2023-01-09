'use strict'

const mark = {
    firstName: 'mark',
    lastName: 'miller',
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = (this.mass / this.height) ** 2
        return this.bmi
    },
};

const john = {
    firstName: 'john',
    lastname: 'smith',
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.bmi = (this.mass / this.height) ** 2
        return this.bmi
    }
};

console.log(mark)
console.log(john)

console.log(mark.calcBmi())
console.log(john.calcBmi())

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI ${john.bmi} is higher than ${mark.firstName}'s BMI ${mark.bmi}`)
} else {
    console.log(`${mark.firstName}'s BMI ${mark.bmi} is higher than ${john.firstName};s BMI ${john.bmi}`)
}

john.unshift = 'bmi'
mark.unshift = 'bmi'

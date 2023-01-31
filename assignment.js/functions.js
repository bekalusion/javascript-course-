//functions
function describeCountry(country, population, capitalCity) {

    let input = `${country} has ${population} million people and it's capital city is ${capitalCity}`
    return input;

}

let countryPopulation = describeCountry('finland', 6, 'helsinki')
console.log(countryPopulation)

function calcAge(birthyeah);
{
    const age = 2037 - birthyeah;
    return age;
}

const age1 = calcAge1(1991);

function (birthyeah) {

}

//function declaration
function percentageOfWorld(population) {
    return (population / 7900) * 100
}
const percentageOfGeorgia = percentageOfWorld(4)
console.log(percentageOfGeorgia)

//function expression

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}
const percentageOfGeorgia2 = percentageOfWorld2(4);
console.log(percentageOfGeorgia2)


// arrow function

const percentageOfWorld3 = population => (population / 7900) * 100
const percentageOfGeorgia3 = percentageOfWorld3(4)
console.log(percentageOfGeorgia3)

//function calling other function

// population has to be number type, for example 1441

const percentageOfWorld = function (population) {
    // 1441 / 7900 * 100 , this will be a returned 
    return (population / 7900) * 100
}
// description is a function that takes parameter, for example country should be a string , for example china, populatios must be number for example 4
// it must return string for example 'China has 1441 million people, 
// which is about 18.2% of the world.'
const description = function (country, population) {
    // 1. calculate percentage 
    const percentage = percentageOfWorld(population)
    const result = `${country} has ${population} million people, which is about ${percentage} of the world`

    console.log(result)
}

description('china', 4)


const teamA = 'koalas'
const teamB = 'dolphins'
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3
//this will be returned
const avgDolphins = calcAverage(85, 54, 41)
const avgKoalas = calcAverage(27, 34, 23)

function checkwinner(avgDolphins, avgKoalas) {



    if (avgDolphins >= 2 * avgKoalas) {
        return `${teamA} win (${avgDolphins} vs ${avgKoalas})`

    } else if (avgKoalas >= 2 * avgDolphins) {
        return `${teamB} win (${avgKoalas} vs ${avgDolphins})`
    } else {
        return `no team wins`


    }

}
console.log(checkwinner(avgDolphins, avgKoalas))

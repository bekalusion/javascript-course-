const teamA = 'dolphins'
const teamB = 'koalas'

const dolphinsAverage = (97 + 112 + 101) / 3

console.log(dolphinsAverage)

const koalasAverage = (109 + 95 + 106) / 3

console.log(koalasAverage)



const minimumScore = 100

if (koalasAverage > minimumScore && koalasAverage > dolphinsAverage) {
    console.log('koalas are the winners')
} else if (dolphinsAverage > minimumScore && dolphinsAverage > koalasAverage) {
    console.log('dolphins are the winners')
} else if (dolphinsAverage > minimumScore && dolphinsAverage === koalasAverage) {
    console.log('draw')
} else
    console.log('no team wins trophy')

const day = 'dsalm'

if (day === 'monday') {
    console.log('plan course  structure')
    console.log('go to coding meetup')
} else if (day === 'tuesday') {
    console.log('prepare theory videos')
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples')
} else if (day === 'friday') {
    console.log('record videos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy weekend')
} else
    console.log('not a valid day')


const language = 'english'
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('most number of native speakers')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break
    case 'hindi':
        console.log('number 4')
        break
    case 'arabic':
        console.log('5th most spoken language')
        break
    default:
        console.log('great language too')

}


const country = 'georgia'
const population = 4
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)

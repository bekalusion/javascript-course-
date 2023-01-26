

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

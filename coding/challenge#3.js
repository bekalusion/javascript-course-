

const tip = 275 / 100 * 15
const bill = 275
console.log(tip)

console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${tip + bill}`)


const bill = 40

const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;

console.log(`${bill},  ${tip}, ${tip + bill}`)

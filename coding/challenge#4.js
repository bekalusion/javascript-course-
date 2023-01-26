const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;

}

for (let i = 0; i < bill.length; i++) {
    //

    tips.push(calcTip(bill[i]))
    total.push(calcTip(bill[i]) + bill[i])

}

console.log(bill, tips, total)



const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(total))
console.log(calcAverage([10, 10, 10, 10]))
console.log(calcAverage(bill))
console.log(calcAverage(tips))

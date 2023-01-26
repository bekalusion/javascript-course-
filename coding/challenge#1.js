

const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`mark's ${markBMI} is higher than john's ${johnBMI}`)
} else {
    console.log(`john's ${johnBMI} is higher than mark's ${markBMI}`)
}

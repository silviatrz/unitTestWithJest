const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollars) => {
    return (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
}
console.log(fromDollarToYen(2));

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}
console.log(fromEuroToDollar(2));

const fromYenToPound = (yen) => {
    return (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
}
console.log(fromYenToPound(2));

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
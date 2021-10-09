const {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", () => {
    let amount = 1;
    const dollars = fromEuroToDollar(amount);
    const expected = amount * 1.2;
    expect(dollars).toBe(expected);
});

test("One dollar should be 106.58 yen", () => {
    let amount = 1;
    const yen = fromDollarToYen(amount);
    const expected = (amount / 1.2) * 127.9;
    expect(yen).toBe(expected);
});

test("One yen should be 0.0062 pounds", () => {
    let amount = 1;
    const pound = fromYenToPound(amount);
    const expected = (amount / 127.9) * 0.8;
    expect(pound).toBe(expected);
});
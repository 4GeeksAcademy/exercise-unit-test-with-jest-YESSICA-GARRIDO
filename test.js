const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("one euro should be 1.07 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.07; 
   
     expect(dollars).toBe(expected);
})

test("one dollar should be 145.93 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(3.5)
    const expected = (3.5 / 1.07) * 156.05; 
   
     expect(yens).toBe(expected);
})

test("one yen should be 0.0056 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(3.5)
    const expected = (3.5 / 156.05) * 0.87; 
   
     expect(pounds).toBe(expected);
})  
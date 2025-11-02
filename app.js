const sum = (a,b) => {
    return a + b ;
};
console.log(sum(7,3)) 

 

 let oneEuro = {
    "JPY": 156.05,
    "USD": 1.07,
    "GBP": 0.87  
}


    const fromEuroToDollar = (euro) => {       
        let dollar = euro * oneEuro.USD;
        return dollar;
    }
    const fromDollarToYen = (dollar) => {       
        let yen = (dollar / oneEuro.USD) * oneEuro.JPY;
        return yen;
    }
    const fromYenToPound = (yen) => {       
        let pound = (yen / oneEuro.JPY) * oneEuro.GBP;
        return pound;
    }

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
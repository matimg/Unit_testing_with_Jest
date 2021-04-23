// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

//funcion que covierte dolares en yenes
const fromDollarToYen= function(valueInDollar){
    // convertimos el valor a yenes
    let valueInYen = (valueInDollar/1.2)*127.9;
    // retornamos el valor
    return valueInYen;
}

//funcion que covierte yenes en libras
const fromYenToPound= function(valueInYen){
    // convertimos el valor a libras
    let valueInPound = (valueInYen/127.9)*0.8;
    // retornamos el valor
    return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
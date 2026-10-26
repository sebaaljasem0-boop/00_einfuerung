const pi = 3.14
function preisteppichRund(price:number, diameter: number): number{
    const redius = diameter/2
    return price / (pi * redius * redius)
}


console.log(preisteppichRund(89, 200))



function preisteppichrechteck (price: number, Length: number, width: number): number{
    return price / (Length * width)
}
console.log(preisteppichrechteck(129, 250, 180))


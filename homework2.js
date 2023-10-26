/*
Množstevní slevy
Napište program, který spočítá cenu objednávky triček s potiskem.

Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko
300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. Nad 500 kusů
zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem
do stránky.
*/

//Solution 1
/*
const nrOfPieces = prompt('Insert number of pieces of T-shirts: ')

if((nrOfPieces > 0) & (nrOfPieces < 50)) {
    document.body.innerHTML += `One T-shirt costs 300 Kc. Total price of the order is: ` + nrOfPieces * 300
} else if((nrOfPieces >= 50) & (nrOfPieces<= 200)) {
    document.body.innerHTML += `One T-shirt costs 250 Kc. Total price of the order is: ` + nrOfPieces * 250
} else if((nrOfPieces > 200) & (nrOfPieces <= 500)) {
    document.body.innerHTML += `One T-shirt costs 200 Kc. Total price of the order is: ` + nrOfPieces * 200
} else if((nrOfPieces > 500) & (nrOfPieces <= 1000)) {
    document.body.innerHTML += `One T-shirt costs 150 Kc. Total price of the order is: ` + nrOfPieces * 150
} else if(nrOfPieces > 1000) {
    document.body.innerHTML += `One T-shirt costs 120 Kc. Total price of the order is: ` + nrOfPieces * 120
} else {
    document.body.innerHTML += `You inserted incorect value. Please insert correct value.`
}
*/

//Solution 2
const nrOfPieces = prompt('Insert number of pieces of T-shirts: ')
let unitPrice = 0

if((nrOfPieces > 0) & (nrOfPieces < 50)) {
    unitPrice = 300
} else if((nrOfPieces >= 50) & (nrOfPieces<= 200)) {
    unitPrice = 250
} else if((nrOfPieces > 200) & (nrOfPieces <= 500)) {
    unitPrice = 200
} else if((nrOfPieces > 500) & (nrOfPieces <= 1000)) {
    unitPrice = 150
} else if(nrOfPieces > 1000) {
    unitPrice = 120
} else {
    document.body.innerHTML += `You inserted incorect value. Please insert correct value.`
}
document.body.innerHTML += `One T-shirt costs ${unitPrice} Kc. Total price of the order is: ` + nrOfPieces * unitPrice + ' Kc'

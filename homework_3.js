/*
Parsování data
Převeďte datum na objekt.
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:
parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
*/

// Funkcny kod bez pouzitia funkcie
// const date = prompt('Enter the date in following format: "DD.MM.YYY": ')
// const parsedDate = {
//     day: date.slice(0,3),
//     month: date.slice(3,7),
//     year: date.slice(7,12),
// }

// console.log(parsedDate.day + parsedDate.month + parsedDate.year)

//Spravne funkcne riesenie nr.1
// const date = prompt('Enter the date in following format: "DD.MM.YYY": ')
// const parsedDate = {
//     day: date.slice(0,3),
//     month: date.slice(3,6),
//     year: date.slice(6,10),
// }
// const parseDate = (date) => {
// return date
// }

// console.log(parseDate('day: ' + parsedDate.day + ', month: ' + parsedDate.month + ', year: ' + parsedDate.year))

//Najspravnejsie funkcne riesenie
const date = prompt('Enter the date in following format: "DD.MM.YYY": ')

const parseDate = (date) => {
    const parsedDate = {
        day: date.slice(0,3),
        month: date.slice(3,6),
        year: date.slice(6,10),
    }
    return parsedDate
}

console.log(parseDate(date))
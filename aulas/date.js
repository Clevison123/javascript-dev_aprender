//Date
//Psr: javascript - Date

//Exemplo 01
const date1 = new Date()
console.log(date1)

//Exemplo 02
const date2 = new Date('June 18 2025    10:30')
console.log(date2)

//Exemplo 03
const date3 = new Date (2023,04,13,  13,22)
console.log(date3)

//SET e GETS
date2.setFullYear(2030)
console.log(date2)

//toDateString()
//toTimeString()
//toISOString()
date2.toDateString()
console.log(date2)
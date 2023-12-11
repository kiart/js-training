let pracownik = {
    imie:"Artur",
    nazwisko:"Kurowski",
    staz:10,
    stanowisko:"Senior Director",
    dzial:"Engineering",
    dataRozpoczeciaPracy:new Date("04/07/2017")
};

console.log(pracownik);

let jsonPracownik = JSON.stringify(pracownik);
console.log(jsonPracownik);
//lepiej sformatowany syn Jaya

jsonPracownik = JSON.stringify(pracownik,null,2);
console.log(jsonPracownik);

//konwersja do objektu

let pracownik1 = JSON.parse(jsonPracownik);
console.log(pracownik1);

let someJson = `{"firstName":"Artur",
"lastName":"Kurowski"}`;
let someObj = JSON.parse(someJson);

console.log(someObj);

//numbers
let num=1_443_250_000.67544745;
console.log(`US locale ${num.toLocaleString('en-US')}` );
console.log(`PL locale ${num.toLocaleString('pl-PL')}` );

num = num.toFixed(2);
console.log(`PL locale ${num.toLocaleString('pl-PL')}` );

let usFormater = new Intl.NumberFormat('en-US',{style: 'currency', currency : 'USD'});
console.log(usFormater.format(num));

let plFormater = new Intl.NumberFormat('pl-PL',{style: 'currency', currency : 'PLN'});
console.log(plFormater.format(num));

//DATES 

let options = {
    dateStyle:"short",
    timeStyle:"short"
};

let tera = new Date();

console.log(`custom date ${tera.toLocaleString("en-US",options)}`);
console.log(`custom date ${tera.toLocaleString("pl-PL",options)}`);






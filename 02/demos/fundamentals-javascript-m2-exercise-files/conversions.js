let age ="41";
age = Number(age);
console.log(`type of ${typeof(age)} value ${age}`);
age = new Number(age);
console.log(`type of ${typeof(age)} value ${age}`);

let age2 ="some-string";
age2 = Number(age2);
console.log(`type of ${typeof(age2)} value ${age2}`);
age2 = new Number(age2);
console.log(`type of ${typeof(age2)} value ${age2}`);
let isInvalidNumber = isNaN (age2);
console.log(`czy jest liczba: ${!isInvalidNumber}`);


age2 =21 + "some";
age2 = Number(age2);
console.log(`type of ${typeof(age2)} value ${age2}`);
age2 = new Number(age2);
console.log(`type of ${typeof(age2)} value ${age2}`);

x=21+"some";
console.log(x);//"21some"

let num = 25;
console.log(`konwersja nie zera do Boolean ${Boolean(num)}`);
num =0;
console.log(`konwersja zera do Boolean ${Boolean(num)}`);
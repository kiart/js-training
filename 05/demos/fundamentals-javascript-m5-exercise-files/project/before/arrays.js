let names = ["Artur","John", "Joshua","Jeyson"];

console.log(names[0]);
console.log(names[10]);

console.log(`Długosć tabeli ${names.length}`);
console.log(`Czy jest Artur: ${names.includes("Artur")}`);
console.log(`Joshua jest ${names.indexOf("Joshua")+1} w kolejce`);

names.push("Bolek");
names.unshift("lolek");
console.log(names);
//wstaw na 2 pozycji usuń jeden element
names.splice(2,1,"Reksio");
console.log(names);

names.shift(names);
console.log(names);

//remove 
names.splice(2,1);
console.log(names);

let obj1 ={
    firstName: "Artur",
    lastName: "Kurowski"
};

let obj2 ={
    firstName: "bolek",
    lastName: "lolek"
};

let obj3 ={
    firstName: "Artur",
    lastName: "Kurowski"
};

let employees = [obj1,obj2];

console.log(`reference check ${employees.includes(obj3)}`);
console.log(`reference check ${employees.includes(obj2)}`);



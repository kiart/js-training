let obj = {};
let obj2 = new Object();

obj.firstName = "Artur";
obj.lastName = "Kurowski";
obj.title = "Senior Manager";
obj.isActive = true;
obj.startDate = new Date("04/07/2017");
obj.vacationDays = 10;

console.log(obj);

let obj3 = {
    firstName:"Artur",
    lastName:"Kurowski",
    title:"Senior Manager",
    isActive:true,
    startDate:new Date("04/07/2017"),
    vacationDays:10
};

console.log(obj3);

console.log(obj3.firstName);
console.log(obj3["lastName"]);

delete obj3.vacationDays;
console.log(obj3);


//passing by reference

let obj4 = obj3;
console.log(obj4);

obj4.firstName = "Paweł";

console.log(`Checking obj 3 after change in obj4 ${obj3.firstName}`);
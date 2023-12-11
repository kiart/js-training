import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First Name:");

if (firstName.length == 0){
    console.log("invalid first name!!!");
    process.exit(1);
}
employee.firstName = firstName;

let lastName = prompt("Last Name:");
if (!lastName){
    console.log("invalid last name!!!");
    process.exit(1);
}
employee.lastName = lastName;

let startYear = prompt("Start year 1990-2023");
startYear = Number(startYear);
if (!Number.isInteger(startYear)){
    console.log("invalid start year!!!");
    process.exit(1);
}

if (startYear<1990|| startYear>2023){
    console.log("start year not from expected range!!!");
    process.exit(1);
}

let startMonth = prompt("Start month 1-12");
startMonth = Number(startMonth);
if (!Number.isInteger(startMonth)){
    console.log("invalid start month!!!");
    process.exit(1);
}

if (startMonth<1 || startMonth>12){
    console.log("start month not from expected range!!!");
    process.exit(1);
}

let startDay = prompt("Start day 1-31");
startDay = Number(startDay);
if (!Number.isInteger(startDay)){
    console.log("invalid start month!!!");
    process.exit(1);
}

if (startDay<1|| startDay>31){
    console.log("start day  not from expected range!!!");
    process.exit(1);
}

employee.startDate = new Date(startYear,startMonth-1,startDay);

let isActive = prompt("Is active? (Y/N)");
if(String(isActive).toLocaleUpperCase() != 'Y' &&  String(isActive).toLocaleUpperCase() != 'N'){
    console.log("is Active y or n !!!");
    process.exit(1);
}

employee.isActive = (String(isActive).toLocaleUpperCase() == "Y");

console.log(employee);

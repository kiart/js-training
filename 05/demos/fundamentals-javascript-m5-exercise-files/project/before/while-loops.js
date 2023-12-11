import employees from './data.json' assert { type : 'json' };
//console.log(employees);
let i=0;
while (employees[i]){
    //console.log(employees[i]);
    console.log(`Employee ${employees[i].firstName} ${employees[i].lastName}` );
    i++;
}

console.log("-------------");
i=0;
do {
    //console.log(employees[i]);
    console.log(`Employee ${employees[i].firstName} ${employees[i].lastName}` );
    i++;
}while (employees[i]);

console.log("----FOR-------");

for (let i=0;i<employees.length;i++){
    console.log(employees[i]);
}

for (let emp of employees){
    console.log(emp.firstName);
}

for (let property in employees[0]){
    console.log(`Property ${property} : ${employees[0][property]}`);
}
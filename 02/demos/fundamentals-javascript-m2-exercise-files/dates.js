let teraz = new Date();

console.log(teraz);
console.log(teraz.getFullYear());
console.log(teraz.getMilliseconds());
console.log(teraz.getMonth());
console.log(teraz.getUTCDay());
console.log(teraz.getUTCDate());//day of month


let dateBegining = new Date(0);
console.log(dateBegining.toUTCString());
console.log(dateBegining.toLocaleString()); // widać godzinę przesunięcia dla lokalnej strefy UTC+1



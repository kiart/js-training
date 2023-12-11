
let emp1 ={
    firstName: "Artur",
    lastName: "Kurowski"
};

let mapa = new Map();
mapa.set("firstName","Artur");
mapa.set("lastName","Kurowski");
console.log(mapa);

//!!!!!!!!!!!!!!!!!!!!NON-STRING KEYS

let mapa2 = new Map();
mapa2.set(new Date().getTime(), "czas");
mapa2.set([],"pusty array" );
mapa2.set(() => "Hi","anonimowa funkcja");

console.log (mapa2);

//access
console.log(mapa.get("lastName"));

mapa.delete("firstName");
console.log(mapa);

let set1 = new Set();
set1.add(emp1);

console.log(`Rozmiar ${set1.size}`);

console.log(`Czy zawiera ${set1.has(emp1)}`);
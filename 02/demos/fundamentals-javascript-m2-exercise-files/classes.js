class CallendarDay {
    #month;
    #year;
    #day;
    constructor(day,month,year){
        this.#day = day;
        this.#month = month;
        this.#year = year;        
    }

    toString() {
        return `${this.#day}--${this.#month}--${this.#year} `;
    }
}

let dzis = new CallendarDay(20,11,2023);
console.log(dzis);
console.log(dzis.toString());
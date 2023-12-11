console.log(`Maksymalny bezpieczny int ${Number.MAX_SAFE_INTEGER}`);
console.log(`Maksymalna wartość ${Number.MAX_VALUE}`);
console.log(` ${Number.MIN_VALUE}`);
console.log(` ${Number.MIN_SAFE_INTEGER}`);
console.log(` ${Number.POSITIVE_INFINITY}`);
console.log(` ${Number.NEGATIVE_INFINITY}`);
console.log(` ${Number.EPSILON}`);
console.log(` 2.14e4`);
console.log("2.14e4");
console.log('2.14e4');

let cyferka = 2.14e4;
console.log(cyferka);

const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n

const bigIntWithUnderscores = 10_000_000_000_000_000_000_000n;

console.log(hugeBin);
console.log(bigIntWithUnderscores);



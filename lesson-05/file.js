let valueNumber = 11;
let valueBoolean1 = true;
let valueBoolean2 = false;
let valueString = 'JavaScript';

console.log(valueString + valueBoolean1);
console.log(valueString + valueBoolean2);
console.log(valueString + valueNumber);
console.log(valueNumber + valueBoolean1);
console.log(valueNumber + valueBoolean2);
console.log(valueNumber + valueString);
console.log(valueBoolean1 + valueNumber);
console.log(valueBoolean1 + valueString);
console.log(valueBoolean2 + valueNumber);
console.log(valueBoolean2 + valueString);

console.log(valueString * valueBoolean1);
console.log(valueString * valueBoolean2);
console.log(valueString * valueNumber);
console.log(valueNumber * valueBoolean1);
console.log(valueNumber * valueBoolean2);
console.log(valueNumber * valueString);
console.log(valueBoolean1 * valueNumber);
console.log(valueBoolean1 * valueString);
console.log(valueBoolean2 * valueNumber);
console.log(valueBoolean2 * valueString);

console.log(valueString / valueBoolean1);
console.log(valueString / valueBoolean2);
console.log(valueString / valueNumber);
console.log(valueNumber / valueBoolean1);
console.log(valueNumber / valueBoolean2);
console.log(valueNumber / valueString);
console.log(valueBoolean1 / valueNumber);
console.log(valueBoolean1 / valueString);
console.log(valueBoolean2 / valueNumber);
console.log(valueBoolean2 / valueString);


console.log(Number("333"));
console.log(Number("-12.34"));
console.log(Number("11k"));
console.log(Number("Hello"));
console.log(Number(true));
console.log(Number(false)); 
console.log(Number(null));
console.log(Number(undefined));
console.log(Number());
console.log(Number("\n"));

console.log(String(11));
console.log(String(true));
console.log(String(false)); 
console.log(String(null));
console.log(String(undefined));
console.log(String());

console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean());
console.log(Boolean(undefined)); 
console.log(Boolean(NaN));
console.log(Boolean(function() {}));
console.log(Boolean(Symbol()));
console.log(Boolean({}));
console.log(Boolean([]));
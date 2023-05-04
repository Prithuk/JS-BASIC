let value = 3 ; 
document.write(value+Number("2")); 

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

let apples1 = "2";
let oranges1 = "3";

// both values converted to numbers before the binary plus
alert( +apples1 + +oranges1 ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
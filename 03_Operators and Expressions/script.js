//************* Operators and expresssions *************


console.log("Operators in JS")
let a = 10;
let b = 4;



//***********Arithmetic Operators *******************
console.log(" a + b ", a+b);
console.log(" a - b ", a-b);
console.log(" a * b ", a*b);
console.log(" a / b ", a/b);
console.log(" a ** b ", a**b); // This means 10 to the power 4 = 10000
console.log(" a % b ", a%b);
console.log(" a++", a++); // The value of a will be 10 because it will print the value of a as 10 
console.log("++a", ++a);
console.log("b--", b--);
console.log("--b", --b);


//********** */ Assignment operators ********************

 let c = 10
c+=5;
// c-=5;
console.log(c);


///*************Comparison operators******** */
    //    ==  equal to 
    //    != not equal
    //    === equal value and type\
    //    !== not equal value and type
    //    >    greater than
    //    <    less than
    //    >=   greater than or equal to 
    //    <=   less than or equal to 
    //    ?    ternary operators

let x = 10;
let y = 20;

console.log(x!==y);
console.log(x===y);
console.log(x>y? "a is greater " : "b is greater");
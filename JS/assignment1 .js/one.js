//1. Write a program to check if a number is divisible by 7 or not?
let number = 21;
console.log(number % 7 === 0 ? number + " is divisible by 7." : number + " is not divisible by 7.");
//2. Write a program to check if a number is multiple of 3 or not?
let numbers= 27;
console.log(numbers %3 ===0 ? numbers + " is a multiple by 3." : numbers + " is not a multiply by 3.");
//3. Write a program to check if a number is positive or not?
let num=34
console.log(num >0 ? num+" is positive" :num+" is not positive");
//4. Write a program to check if a number is 3-digit numbers or not?
let num1 =34
console.log( num1>=100 && num1 <=999 ? num1+ " is 3 digit numbers" : num1+ " is not a 3 digit numbers");
//5. Write a program to print even or odd for a given number?
let num2 =422223
console.log(num2 %2===0 ? num2+" given number is even number" : num2+ " given number is odd number");
//6. Write a program to print the greatest number in given two numbers?
let a=30,b=20
console.log(a>b ? a+" is greatest number" : b+" is greatest number" )
//7. Write a program to print the least number given two numbers?
let c=3000,d=570
console.log(c<d ? c+" is the least number" : d+" is the least number" )
//8. Write a program to print the greatest number in given three numbers?
let x=423,y=234,z=46
console.log(x>y && x>z ? x+" is the greatest number": y>z ? y+ " is the grestest number" : z+" is the grestest number");
//9. Write a program to print the least number in given three numbers?
let m=3,n=2,o=46
console.log(m<n && m<o ? m+" is the least number": n<o ? n+ " is the least number" : o+" is the least number");
//10. Write a program to print the given 3 numbers in ascending orders?
let numberss = [10, 30, 20, 56, 97, 53, 12, 23, 15, 11, 19];
console.log(numberss.sort((a, b) => a - b));
let numbersss = [10, 30, 20, 56, 97, 53, 12, 23, 15, 11, 19];
console.log(numbersss.sort((a, b) => a - b) .join(", "));
//11. Write a program to print the given 3 numbers in decending orders?
let num3 = [10, 30, 20, 56, 97, 53, 12, 23, 15, 11, 19];
console.log(num3.sort((a, b) => b - a));
let num4 = [10, 30, 20, 56, 97, 53, 12, 23, 15, 11, 19];
console.log(num4.sort((a, b) => b - a) .join(", "));
//12. JavaScript Program to find largest of Three Numbers?
let A=30,B=204,C=34;
console.log("The largest number is " + (A > B && A > C ? A : B > C ? B : C));
//13. JS Program check if a number is divisible by 7 or not using a ternary operator?
let num5 = 16; // replace with any number
let isDivisibleBy7 = (num5 % 7 === 0) ? 'Divisible by 7' : 'Not divisible by 7';
console.log(isDivisibleBy7);
//14. JS Program to check if a number is multiple of 3 or not using a ternary operator?
let num6 = 36; 
x = (num6 % 3 === 0) ? 'multiple by 3' : 'Not multiply by 3';
console.log(x);
//15. Write a program to check if a number is positive or not using a ternary operator?
let num7=436
console.log(num7 >0 ? num7+" is positive" :num7+" is not positive");
let num8=-108
num8 >0 ? console.log("given number is positve"): console.log("given number is not positive")
//16. JS Program to check if a number is 3-digit numbers or not using a ternary operator?
let num9=3553
console.log(num9 >100 && num9 <999 ? num9+" is a 3 digit number": num9+" is not a 3 digit number");
num9 >100 && num9 <999 ? console.log("number is 3-digit"):console.log("number is not 3-digit")
//17. Write a program to print even or odd for a given number using a ternary operator?
let num10 =687
num10 %2===0 ? console.log( num10+" is even"):console.log(num10+" is odd");

